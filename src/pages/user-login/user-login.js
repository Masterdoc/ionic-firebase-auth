var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../../providers/auth';
import { Storage } from '@ionic/storage';
import { UserProfileProvider } from '../../providers/user-profile';
/*import { Dashboard } from '../dashboard/dashboard';
import { UserSignup } from '../user-signup/user-signup';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';*/
var UserLogin = (function () {
    function UserLogin(navCtrl, navParams, afAuth, toastCtrl, facebook, platform, authProvider, storage, profileProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.facebook = facebook;
        this.platform = platform;
        this.authProvider = authProvider;
        this.storage = storage;
        this.profileProvider = profileProvider;
        this.loginData = {
            email: '',
            password: ''
        };
        this.userProfile = null;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                _this.userProfile = user;
            }
            else {
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
    UserLogin.prototype.googleLogin = function () {
        this.authProvider.googleLogin();
    };
    UserLogin.prototype.login = function () {
        var _this = this;
        // Login Code here
        this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
            .then(function (auth) {
            //set username
            _this.setUserName();
            var toast = _this.toastCtrl.create({
                message: 'Vous êtes connectés',
                duration: 2000
            });
            toast.present();
        })
            .catch(function (err) {
            // Handle error
            var toast = _this.toastCtrl.create({
                message: err.message,
                duration: 2000
            });
            toast.present();
        });
    };
    UserLogin.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserLogin');
    };
    UserLogin.prototype.facebookLogin = function () {
        var _this = this;
        // Login code goes here 
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                return firebase.auth().signInWithCredential(facebookCredential)
                    .then(function (success) {
                    console.log("Firebase success: " + JSON.stringify(success));
                    _this.userProfile = success;
                    // Handle error
                    //
                    _this.setUserName();
                    var toast = _this.toastCtrl.create({
                        message: "Connexion réussie",
                        duration: 2000
                    });
                    toast.present();
                });
            });
        }
        else {
            return this.afAuth.auth
                .signInWithPopup(new firebase.auth.FacebookAuthProvider())
                .then(function (res) {
                //this.setUserNameStorage(res.displayName);
                _this.fbData = res.user;
                _this.setUserNameStorage(_this.fbData.displayName);
                console.log(_this.fbData.displayName);
            });
        }
    };
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
    UserLogin.prototype.dashboardPage = function () { this.navCtrl.push('Dashboard'); };
    UserLogin.prototype.signupPage = function () { this.navCtrl.push('UserSignup'); };
    UserLogin.prototype.forgotPasswordPage = function () { this.navCtrl.push('UserForgotpassword'); };
    UserLogin.prototype.setUserName = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            if (userProfileSnapshot.val()) {
                _this.setUserNameStorage(userProfileSnapshot.val().firstName);
            }
        });
        // set a key/value
    };
    /*
       * Save user credentials.
       */
    UserLogin.prototype.setUserNameStorage = function (username) {
        this.storage.set('username', username);
    };
    UserLogin.prototype.setGetNameStorage = function (username) {
        this.storage.get('usernae').then(function (val) {
            return val;
            //console.log('Your age is', val);
        });
    };
    return UserLogin;
}());
UserLogin = __decorate([
    IonicPage(),
    Component({
        selector: 'page-user-login',
        templateUrl: 'user-login.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AngularFireAuth,
        ToastController,
        Facebook,
        Platform,
        AuthProvider,
        Storage,
        UserProfileProvider])
], UserLogin);
export { UserLogin };
//# sourceMappingURL=user-login.js.map