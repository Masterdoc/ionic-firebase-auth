import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Platform  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../../providers/auth';
import { UserProfileProvider } from '../../providers/user-profile';

/*import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';*/

@IonicPage()
@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignup {

  signupData = {
    //firstName: '',
    //lastName: '',
    //birthDate: '',
    email: '',
    password: '',
    passwordRetyped: ''
  };

  userProfile: any = null;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    private facebook: Facebook, 
    private platform: Platform,
    public profileProvider: UserProfileProvider,
    public authProvider: AuthProvider, 
    private toastCtrl: ToastController) {
    this.signupData.email = this.navParams.get('email');
  }

googleLogin(): void {
    this.authProvider.googleLogin();
  }

facebookLogin() {
    // login de facebook 
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
            // Handle error
            let toast = this.toastCtrl.create({
              message: "Connexion réussie",
              duration: 2000
            });
            toast.present();
        });
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }

  signup() {
    //inscription
    if(this.signupData.password !== this.signupData.passwordRetyped) {
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        message: 'Les deux mots de passe saisis ne concordent pas',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    // Inscription sur firebase
    this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
    .then(auth => {
      // une fois authentifié on met à jour ses infos
      //this.profileProvider.updateName(this.signupData.firstName, this.signupData.lastName);
      //this.profileProvider.updateDOB(this.signupData.birthDate);
       console.log(auth);
    })
    .catch(err => {
      // en cas d'erreur
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignup');
  }

  dashboardPage(){ this.navCtrl.push('Dashboard'); }
  loginPage(){ this.navCtrl.push('UserLogin');}
  forgotPasswordPage(){ this.navCtrl.push('UserForgotpassword');}

}
