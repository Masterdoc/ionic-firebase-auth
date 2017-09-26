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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnonceProvider } from '../../providers/annonce/annonce';
import firebase from 'firebase';
/**
 * Generated class for the AnnoncesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AnnoncesPage = (function () {
    function AnnoncesPage(navCtrl, navParams, annonce) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.annonce = annonce;
        this.formData = {
            provenance: '',
            destination: '',
            heureDepart: '',
            rayon: ''
        };
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                //var this.currentUser = user;
                //this.userProfile = firebase.database().ref(`/user/${user.uid}`);
                _this.annonce.addAnnonceData(user.uid, 'auteur', 'objet', 'descriptif', 'provenance', 'destination', 'photo', 'categorie', 'publie')
                    .then(function (res) {
                    console.log(res);
                });
            }
        });
    }
    AnnoncesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnnoncesPage');
    };
    return AnnoncesPage;
}());
AnnoncesPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-annonces',
        templateUrl: 'annonces.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AnnonceProvider])
], AnnoncesPage);
export { AnnoncesPage };
//# sourceMappingURL=annonces.js.map