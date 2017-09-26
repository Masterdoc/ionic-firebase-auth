//
//
// ce provider permet d'authentifier l'utilisateur
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
//import firebase from 'firebase/app';
//import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
//import { AuthProvider } from '../providers/auth';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {


  constructor(public http: Http,
    public googlePlus: GooglePlus,
    //private facebook: Facebook, 
    private afAuth: AngularFireAuth) {
    console.log('Hello Auth Provider');
  }

  logoutUser(): firebase.Promise<void> {
	  firebase.database().ref('/userProfile')
	    .child(firebase.auth().currentUser.uid).off();

	  return firebase.auth().signOut();
	}

	googleLogin(): Promise<any> {
    return this.googlePlus.login({
      'webClientId': '898177556572-2v0u49mktgrualo413184u9leik5u956.apps.googleusercontent.com',
      'offline': true
    })
    .then( res => {
      const credential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
      
      this.afAuth.auth.signInWithCredential(credential)
        .then( success => { console.log("Firebase success: " + JSON.stringify(success)); })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      })
    .catch(err => console.log("Error: ", err));
  }


  /*facebookLogin(): Promise<any> {
    return this.facebook.login(['email'])
      .then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);

        this.afAuth.auth.signInWithCredential(facebookCredential)
        .then((success) => { console.log("Firebase success: " + JSON.stringify(success)); })
        .catch((error) => { console.log("Firebase failure: " + JSON.stringify(error)); });

      })
      .catch((error) => { console.log(error) });
  }*/
/*
  facebookLogin(): Promise<any> {
    return this.facebook.login(['public_profile', 'email'])
      .then( (res: FacebookLoginResponse) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(res.authResponse.accessToken);

        this.afAuth.auth.signInWithCredential(facebookCredential)
        .then((success) => { console.log("Firebase success: " + JSON.stringify(success)); })
        .catch((error) => { console.log("Firebase failure: " + JSON.stringify(error)); });

      })
      .catch((error) => { console.log(error) });
  }*/

}
