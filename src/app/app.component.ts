import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

//import { UserLogin } from '../pages/user-login/user-login';
//import { Dashboard } from '../pages/dashboard/dashboard';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { UserProfileProvider } from '../providers/user-profile';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public username: string;

  // make HelloIonicPage the root (or first) page
  rootPage: any =  'UserLogin';
  pages: Array<{title: string,icon:string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, 
    private afAuth: AngularFireAuth,
    public profileProvider: UserProfileProvider,
    private storage: Storage
  ) {


  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(token, user);
    }
  }).catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
    console.log(errorMessage);
  });
    this.checkAuthentification();
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Tableau de bord',icon:'home', component: 'Dashboard' },
      { title: 'Annonces',icon:'person', component: 'AnnoncesPage' },
      { title: 'Mes annonces « envois »',icon:'person', component: 'EnvoieColisPage' },
      { title: 'Home relais',icon:'person', component: 'HomeHopPage' },
      { title: 'Mes annonces « ports »',icon:'person', component: 'ConvoisColisPage' },
      { title: 'Colis expediés',icon:'person', component: 'ColisExpediesPage' },
      { title: 'Colis livrés',icon:'person', component: 'ColisLivresPage' },
      { title: 'Paramètres',icon:'person', component: 'Profile' },
      { title: 'Profile',icon:'person', component: 'Profile' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.username = this.profileProvider.getUserNameStorage();

      firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.username = user.displayName;
      }
    })
      

      console.log('test');
      console.log(this.username);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  checkAuthentification(){
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = 'UserLogin';
      else
        this.rootPage = 'Dashboard';
    });
  }

  signOut() {
    this.afAuth.auth.signOut()
      .then(()=>{
        this.rootPage = 'UserLogin';
      });
  }

}
