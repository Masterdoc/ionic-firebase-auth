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
 * Generated class for the ColisLivresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ColisLivresPage = (function () {
    function ColisLivresPage(navCtrl, navParams, annoncePro) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.annoncePro = annoncePro;
        //l'id de l'utilisateur
        this.userId = firebase.auth().currentUser.uid;
        this.annoncePro.getUserOperation().subscribe(function (resp) {
            _this.annonces = resp;
        });
    }
    ColisLivresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ColisLivresPage');
    };
    //filtrer les operations et garder les colis livres
    ColisLivresPage.prototype.livraisonFilter = function (uid) {
        if (uid == this.userId) {
            //console.log(uid);
            return true;
        }
        else {
            return false;
        }
    };
    return ColisLivresPage;
}());
ColisLivresPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-colis-livres',
        templateUrl: 'colis-livres.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AnnonceProvider])
], ColisLivresPage);
export { ColisLivresPage };
//# sourceMappingURL=colis-livres.js.map