var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { AnnonceProvider } from '../../providers/annonce/annonce';
import firebase from 'firebase';
/**
 * Generated class for the EnvoieColisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EnvoieColisPage = (function () {
    function EnvoieColisPage(navCtrl, navParams, alertCtrl, annonce) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.annonce = annonce;
        this.formData = {
            objet: '',
            descriptif: '',
            provenance: '',
            destination: '',
            delaisLivraison: '',
            photo: '',
            categorie: '',
            assurance: '',
            relais: '',
            estimation: '',
            propositionTarif: '',
            publie: '',
            expiration: '',
            numeroCarte: ''
        };
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                //var this.currentUser = user;
                //this.userProfile = firebase.database().ref(`/user/${user.uid}`);
                _this.annonce.addAnnonceData(user.uid, user.displayName, 'objet', 'descriptif', 'provenance', 'destination', 'photo', 'categorie', 'publie')
                    .then(function (res) {
                    console.log(res);
                });
            }
        });
        this.alertCtrl = alertCtrl;
    }
    EnvoieColisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnvoieColisPage');
    };
    EnvoieColisPage.prototype.goToPage2 = function () {
        this.slides.slideTo(1, 500);
    };
    EnvoieColisPage.prototype.goToPage3 = function () {
        this.slides.slideTo(2, 500);
    };
    EnvoieColisPage.prototype.goToPage4 = function () {
        this.slides.slideTo(3, 500);
    };
    EnvoieColisPage.prototype.submitForm = function () {
        var _this = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                //var this.currentUser = user;
                //this.userProfile = firebase.database().ref(`/user/${user.uid}`);
                _this.annonce.addAnnonceData(user.uid, user.displayName, _this.formData.objet, _this.formData.descriptif, _this.formData.provenance, _this.formData.destination, _this.formData.photo, _this.formData.categorie, _this.formData.publie)
                    .then(function (res) {
                    _this.
                    ;
                });
            }
        });
    };
    EnvoieColisPage.prototype.showConfirmation = function () {
        var alert = this.alertCtrl.create({
            title: 'Succès',
            message: 'Merci pour votre\n' +
                'confiance Hyacinthe !',
            buttons: ['OK']
        });
        alert.present();
    };
    return EnvoieColisPage;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], EnvoieColisPage.prototype, "slides", void 0);
EnvoieColisPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-envoie-colis',
        templateUrl: 'envoie-colis.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController, AnnonceProvider])
], EnvoieColisPage);
export { EnvoieColisPage };
//# sourceMappingURL=envoie-colis.js.map