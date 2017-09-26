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
import { IonicPage, NavController, NavParams, AlertController, ToastController, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../../providers/auth';
import { UserProfileProvider } from '../../providers/user-profile';
/*import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';*/
var UserSignup = (function () {
    function UserSignup(navCtrl, navParams, alertCtrl, afAuth, facebook, platform, profileProvider, authProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.facebook = facebook;
        this.platform = platform;
        this.profileProvider = profileProvider;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.signupData = {
            name: '',
            adress: '',
            email: '',
            password: '',
            passwordRetyped: ''
        };
        this.userProfile = null;
        this.signupData.email = this.navParams.get('email');
    }
    UserSignup.prototype.googleLogin = function () {
        this.authProvider.googleLogin();
    };
    UserSignup.prototype.facebookLogin = function () {
        var _this = this;
        // login de facebook 
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                return firebase.auth().signInWithCredential(facebookCredential)
                    .then(function (success) {
                    console.log("Firebase success: " + JSON.stringify(success));
                    _this.userProfile = success;
                    // Handle error
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
                .then(function (res) { return console.log(res); });
        }
    };
    UserSignup.prototype.signup = function () {
        var _this = this;
        //inscription
        if (this.signupData.password !== this.signupData.passwordRetyped) {
            var alert_1 = this.alertCtrl.create({
                title: 'Erreur',
                message: 'Les deux mots de passe saisis ne concordent pas',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        // Inscription sur firebase
        this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
            .then(function (auth) {
            // une fois authentifié on met à jour ses infos
            //this.profileProvider.updateName(this.signupData.firstName, this.signupData.lastName);
            //this.profileProvider.updateDOB(this.signupData.birthDate);
            console.log(auth);
        })
            .catch(function (err) {
            // en cas d'erreur
            var alert = _this.alertCtrl.create({
                title: 'Erreur',
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    UserSignup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSignup');
    };
    UserSignup.prototype.dashboardPage = function () { this.navCtrl.push('Dashboard'); };
    UserSignup.prototype.loginPage = function () { this.navCtrl.push('UserLogin'); };
    UserSignup.prototype.forgotPasswordPage = function () { this.navCtrl.push('UserForgotpassword'); };
    return UserSignup;
}());
UserSignup = __decorate([
    IonicPage(),
    Component({
        selector: 'page-user-signup',
        templateUrl: 'user-signup.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AlertController,
        AngularFireAuth,
        Facebook,
        Platform,
        UserProfileProvider,
        AuthProvider,
        ToastController])
], UserSignup);
export { UserSignup };
//# sourceMappingURL=user-signup.js.map