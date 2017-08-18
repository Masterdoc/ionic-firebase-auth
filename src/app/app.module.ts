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
import { Facebook } from '@ionic-native/facebook';
import { UserProfileProvider } from '../providers/user-profile';
import { AuthProvider } from '../providers/auth';
import { GooglePlus } from '@ionic-native/google-plus';

// parametre de configuration fourni par firebase
var config = {
    apiKey: "AIzaSyD4PTMhxCu6bwXUd1EDuWuEgS5u-yFl9uQ",
    authDomain: "authentification-9e381.firebaseapp.com",
    databaseURL: "https://authentification-9e381.firebaseio.com",
    projectId: "authentification-9e381",
    storageBucket: "authentification-9e381.appspot.com",
    messagingSenderId: "897770246707"
  };


@NgModule({
  declarations: [
    MyApp/*,

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
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp/*,

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
