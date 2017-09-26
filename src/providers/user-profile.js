// provider du profile de l'utilisateur
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
/*
  Generated class for the UserProfile provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UserProfileProvider = (function () {
    function UserProfileProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = firebase.database().ref("/user/" + user.uid);
            }
        });
    }
    //information sur l'utilisateur courant
    UserProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    // fonction de mise à jour du nom et du prenoms
    UserProfileProvider.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.update({
            firstName: firstName,
            lastName: lastName,
        });
    };
    // fonction de mise à jour de la date de naissance
    UserProfileProvider.prototype.updateDOB = function (birthDate) {
        return this.userProfile.update({
            birthDate: birthDate,
        });
    };
    // fonction de mise à jour de l'email
    UserProfileProvider.prototype.updateEmail = function (newEmail, password) {
        var _this = this;
        var credential = firebase.auth.EmailAuthProvider
            .credential(this.currentUser.email, password);
        return this.currentUser.reauthenticateWithCredential(credential)
            .then(function (user) {
            _this.currentUser.updateEmail(newEmail).then(function (user) {
                _this.userProfile.update({ email: newEmail });
            });
        });
    };
    // fonction de mise à jour du mot de passe
    UserProfileProvider.prototype.updatePassword = function (newPassword, oldPassword) {
        var _this = this;
        var credential = firebase.auth.EmailAuthProvider
            .credential(this.currentUser.email, oldPassword);
        return this.currentUser.reauthenticateWithCredential(credential)
            .then(function (user) {
            _this.currentUser.updatePassword(newPassword).then(function (user) {
                console.log("Mot de passe modifié");
            }, function (error) {
                console.log(error);
            });
        });
    };
    /*
     * Save user credentials.
     */
    UserProfileProvider.prototype.setUserNameStorage = function (username) {
        this.storage.set('username', username);
    };
    UserProfileProvider.prototype.getUserNameStorage = function () {
        this.storage.get('username').then(function (val) {
            return val;
        });
    };
    return UserProfileProvider;
}());
UserProfileProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Storage])
], UserProfileProvider);
export { UserProfileProvider };
//# sourceMappingURL=user-profile.js.map