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
/**
 * Generated class for the EnvoieColisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConvoisColisPage = (function () {
    function ConvoisColisPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formData = {
            provenance: '',
            destination: '',
            heureDepart: '',
            heureArrivee: '',
            escale: '',
            tarif: '',
            nom: '',
            prenoms: '',
            rib: ''
        };
        this.alertCtrl = alertCtrl;
    }
    ConvoisColisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnvoieColisPage');
    };
    ConvoisColisPage.prototype.goToPage2 = function () {
        this.slides.slideTo(1, 500);
    };
    ConvoisColisPage.prototype.goToPage3 = function () {
        this.slides.slideTo(2, 500);
    };
    ConvoisColisPage.prototype.submitForm = function () {
        var alert = this.alertCtrl.create({
            title: 'Succès',
            message: 'Merci pour votre\n' +
                'confiance Hyacinthe !',
            buttons: ['OK']
        });
        alert.present();
    };
    return ConvoisColisPage;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], ConvoisColisPage.prototype, "slides", void 0);
ConvoisColisPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-convois-colis',
        templateUrl: 'convois-colis.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], ConvoisColisPage);
export { ConvoisColisPage };
//# sourceMappingURL=convois-colis.js.map