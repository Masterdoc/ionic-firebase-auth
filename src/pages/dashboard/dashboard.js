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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Dashboard = (function () {
    function Dashboard(navCtrl, navParams, camera, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.username = '';
        this.alertCtrl = alertCtrl;
        storage.get('age').then(function (val) {
            _this.username = val;
        });
    }
    Dashboard.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dashboard');
    };
    Dashboard.prototype.ColisLivresPage = function () { this.navCtrl.push('ColisLivresPage'); };
    Dashboard.prototype.ColisHomePage = function () { this.navCtrl.push('ColisHomePage'); };
    Dashboard.prototype.ColisExpediesPage = function () { this.navCtrl.push('ColisExpediesPage'); };
    Dashboard.prototype.EnvoieColisPage = function () { this.navCtrl.push('EnvoieColisPage'); };
    Dashboard.prototype.ConvoieColisPage = function () { this.navCtrl.push('ConvoisColisPage'); };
    Dashboard.prototype.HomeHopPage = function () { this.navCtrl.push('HomeHopPage'); };
    return Dashboard;
}());
Dashboard = __decorate([
    IonicPage(),
    Component({
        selector: 'page-dashboard',
        templateUrl: 'dashboard.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Camera, AlertController,
        Storage])
], Dashboard);
export { Dashboard };
//# sourceMappingURL=dashboard.js.map