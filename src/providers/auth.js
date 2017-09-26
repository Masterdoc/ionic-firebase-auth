var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//
//
// ce provider permet d'authentifier l'utilisateur
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
//import firebase from 'firebase/app';
//import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
//import { AuthProvider } from '../providers/auth';
/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(http, googlePlus, 
        //private facebook: Facebook, 
        afAuth) {
        this.http = http;
        this.googlePlus = googlePlus;
        this.afAuth = afAuth;
        console.log('Hello Auth Provider');
    }
    AuthProvider.prototype.logoutUser = function () {
        firebase.database().ref('/userProfile')
            .child(firebase.auth().currentUser.uid).off();
        return firebase.auth().signOut();
    };
    AuthProvider.prototype.googleLogin = function () {
        var _this = this;
        return this.googlePlus.login({
            'webClientId': '898177556572-2v0u49mktgrualo413184u9leik5u956.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (res) {
            var credential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
            _this.afAuth.auth.signInWithCredential(credential)
                .then(function (success) { console.log("Firebase success: " + JSON.stringify(success)); })
                .catch(function (error) { return console.log("Firebase failure: " + JSON.stringify(error)); });
        })
            .catch(function (err) { return console.log("Error: ", err); });
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        GooglePlus,
        AngularFireAuth])
], AuthProvider);
export { AuthProvider };
//# sourceMappingURL=auth.js.map