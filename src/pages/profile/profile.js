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
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { UserProfileProvider } from '../../providers/user-profile';
import { AuthProvider } from '../../providers/auth';
//import * as firebase from 'firebase/app';
/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Profile = (function () {
    function Profile(navCtrl, alertCtrl, profileProvider, authProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.profileProvider = profileProvider;
        this.authProvider = authProvider;
        this.userProfile = null;
        this.birthDate = null;
    }
    Profile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Profile');
    };
    Profile.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            if (userProfileSnapshot.val()) {
                _this.birthDate = userProfileSnapshot.val().birthDate;
            }
        });
    };
    Profile.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('UserLogin');
        });
    };
    Profile.prototype.updateName = function () {
        var _this = this;
        var firstname, lastname = '';
        if (this.userProfile) {
            firstname = this.userProfile.firstName;
            lastname = this.userProfile.firstName;
        }
        var alert = this.alertCtrl.create({
            message: "Nom et prénom",
            inputs: [
                {
                    name: 'firstName',
                    placeholder: 'Prénoms',
                    value: firstname
                },
                {
                    name: 'lastName',
                    placeholder: 'Nom',
                    value: lastname
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                },
                {
                    text: 'Enregistrer',
                    handler: function (data) {
                        _this.profileProvider.updateName(data.firstName, data.lastName);
                    }
                }
            ]
        });
        alert.present();
    };
    Profile.prototype.updateDOB = function (birthDate) {
        this.profileProvider.updateDOB(birthDate);
    };
    Profile.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newEmail',
                    placeholder: 'Email',
                },
                {
                    name: 'password',
                    placeholder: 'Mot de passe actuel',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                },
                {
                    text: 'Enregistrer',
                    handler: function (data) {
                        _this.profileProvider.updateEmail(data.newEmail, data.password);
                    }
                }
            ]
        });
        alert.present();
    };
    Profile.prototype.updatePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newPassword',
                    placeholder: 'Nouveau mot de passe',
                    type: 'password'
                },
                {
                    name: 'oldPassword',
                    placeholder: 'Mot de passe actuel',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                },
                {
                    text: 'Enregistrer',
                    handler: function (data) {
                        _this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
                    }
                }
            ]
        });
        alert.present();
    };
    return Profile;
}());
Profile = __decorate([
    IonicPage(),
    Component({
        selector: 'page-profile',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [NavController, AlertController,
        UserProfileProvider, AuthProvider])
], Profile);
export { Profile };
//# sourceMappingURL=profile.js.map