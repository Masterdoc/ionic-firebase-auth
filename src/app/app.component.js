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
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { UserProfileProvider } from '../providers/user-profile';
import { Storage } from '@ionic/storage';
var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, afAuth, profileProvider, storage) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.profileProvider = profileProvider;
        this.storage = storage;
        // make HelloIonicPage the root (or first) page
        this.rootPage = 'UserLogin';
        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(token, user);
            }
        }).catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log(errorMessage);
        });
        this.checkAuthentification();
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Tableau de bord', icon: 'home', component: 'Dashboard' },
            { title: 'Envoyer un colis', icon: 'person', component: 'EnvoieColisPage' },
            { title: 'Être home colis', icon: 'person', component: 'HomeHopPage' },
            { title: 'Transporter un colis', icon: 'person', component: 'ConvoisColisPage' },
            { title: 'Paramètres', icon: 'person', component: 'Profile' },
            { title: 'Profile', icon: 'person', component: 'Profile' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.username = this.profileProvider.getUserNameStorage();
            _this.storage.get('username').then(function (val) {
                _this.username = val;
                console.log(val);
            });
            console.log('test');
            console.log(_this.username);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.checkAuthentification = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (auth) {
            if (!auth)
                _this.rootPage = 'UserLogin';
            else
                _this.rootPage = 'Dashboard';
        });
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function () {
            _this.rootPage = 'UserLogin';
        });
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        MenuController,
        StatusBar,
        SplashScreen,
        AngularFireAuth,
        UserProfileProvider,
        Storage])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map