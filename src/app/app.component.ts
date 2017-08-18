import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

//import { UserLogin } from '../pages/user-login/user-login';
//import { Dashboard } from '../pages/dashboard/dashboard';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any =  'UserLogin';
  pages: Array<{title: string,icon:string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, 
    private afAuth: AngularFireAuth
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
      { title: 'Dashbaord',icon:'home', component: 'Dashboard' },
      { title: 'Profile',icon:'person', component: 'Profile' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
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
