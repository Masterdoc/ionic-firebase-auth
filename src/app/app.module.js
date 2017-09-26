var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
/*import { UserLogin } from '../pages/user-login/user-login';
import { UserSignup } from '../pages/user-signup/user-signup';
import { UserForgotpassword } from '../pages/user-forgotpassword/user-forgotpassword';
import { Dashboard } from '../pages/dashboard/dashboard';*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Facebook } from '@ionic-native/facebook';
import { UserProfileProvider } from '../providers/user-profile';
import { AuthProvider } from '../providers/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { UserProvider } from '../providers/user/user';
import { AnnonceProvider } from '../providers/annonce/annonce';
// parametre de configuration fourni par firebase
var config = {
    apiKey: "AIzaSyAYhObxFBKwTOvWRlGfDjySwxBtEfNX5AM",
    authDomain: "hop-colis.firebaseapp.com",
    databaseURL: "https://hop-colis.firebaseio.com",
    projectId: "hop-colis",
    storageBucket: "hop-colis.appspot.com",
    messagingSenderId: "898177556572"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp /*,
        
            UserLogin,
            UserSignup,
            UserForgotpassword,
            Dashboard,*/
        ],
        imports: [
            BrowserModule,
            HttpModule,
            IonicModule.forRoot(MyApp),
            AngularFireModule.initializeApp(config),
            AngularFireAuthModule,
            AngularFireDatabaseModule,
            IonicStorageModule.forRoot({
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp /*,
        
            UserLogin,
            UserSignup,
            UserForgotpassword,
            Dashboard,*/
        ],
        providers: [
            StatusBar,
            SplashScreen,
            Facebook,
            UserProfileProvider,
            AuthProvider,
            GooglePlus,
            Camera,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            UserProvider,
            AnnonceProvider
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map