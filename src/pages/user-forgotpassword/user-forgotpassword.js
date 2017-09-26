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
/*import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';
import { UserSignup } from '../user-signup/user-signup';*/
var UserForgotpassword = (function () {
    function UserForgotpassword(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserForgotpassword.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserForgotpassword');
    };
    UserForgotpassword.prototype.dashboardPage = function () { this.navCtrl.push('Dashboard'); };
    UserForgotpassword.prototype.loginPage = function () { this.navCtrl.push('UserLogin'); };
    UserForgotpassword.prototype.signupPage = function () { this.navCtrl.push('UserSignup'); };
    return UserForgotpassword;
}());
UserForgotpassword = __decorate([
    IonicPage(),
    Component({
        selector: 'page-user-forgotpassword',
        templateUrl: 'user-forgotpassword.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], UserForgotpassword);
export { UserForgotpassword };
//# sourceMappingURL=user-forgotpassword.js.map