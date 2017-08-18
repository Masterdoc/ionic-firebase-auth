import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../../providers/auth';

/*import { Dashboard } from '../dashboard/dashboard';
import { UserSignup } from '../user-signup/user-signup';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';*/

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLogin {

  loginData = {
    email: '',
    password: ''
  }
  userProfile: any = null;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private afAuth: AngularFireAuth, 
    private toastCtrl: ToastController,
    private facebook: Facebook, 
    private platform: Platform,
    public authProvider: AuthProvider) {

    firebase.auth().onAuthStateChanged( user => {
    if (user) {
      console.log(user);
      this.userProfile = user;
    } else {
      console.log("There's no user here");
    }
  });
  }

  /* googleLogin():void {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider).then( () => {
      firebase.auth().getRedirectResult().then( result => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user);
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message);
      });
    });
  }*/

  
googleLogin(): void {
    this.authProvider.googleLogin();
  }

  login() {
    // Login Code here
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      // Do custom things with auth
    })
    .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 2000
      });
      toast.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLogin');
  }

  facebookLogin() {
    // Login code goes here 
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
            // Handle error
            let toast = this.toastCtrl.create({
              message: "Connexion réussie",
              duration: 2000
            });
            toast.present();
        });
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }

  /*loginFacebook() {
    // Login code goes here 
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
            // Handle error
            let toast = this.toastCtrl.create({
              message: "Connexion réussie",
              duration: 2000
            });
            toast.present();
        });
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }*/

  /*facebookLogin(): void {
    this.authProvider.facebookLogin();
  }*/
  dashboardPage(){ this.navCtrl.push('Dashboard'); }
  signupPage(){ this.navCtrl.push('UserSignup'); }
  forgotPasswordPage(){ this.navCtrl.push('UserForgotpassword'); }

}
