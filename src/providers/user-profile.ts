// provider du profile de l'utilisateur

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the UserProfile provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProfileProvider {

  public userProfile:firebase.database.Reference;
  public currentUser:firebase.User;

  constructor(public http: Http) {
    firebase.auth().onAuthStateChanged( user => {
	    if (user){
	      this.currentUser = user;
	      this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
	    }
	  });
  }

  //information sur l'utilisateur courant
  getUserProfile(): firebase.database.Reference {
	  return this.userProfile;
	}

	// fonction de mise à jour du nom et du prenoms
  updateName(firstName: string, lastName: string): firebase.Promise<void> {
	  return this.userProfile.update({
	    firstName: firstName,
	    lastName: lastName,
	  });
	}

	// fonction de mise à jour de la date de naissance
	/*updateDOB(birthDate: string): firebase.Promise<any> {
	  return this.userProfile.update({
	    birthDate: birthDate,
	  });
	}*/

	// fonction de mise à jour de l'email
	updateEmail(newEmail: string, password: string): firebase.Promise<any> {
	  const credential =  firebase.auth.EmailAuthProvider
	    .credential(this.currentUser.email, password);

	  return this.currentUser.reauthenticateWithCredential(credential)
	  .then( user => {
	    this.currentUser.updateEmail(newEmail).then( user => {
	      this.userProfile.update({ email: newEmail });
	    });
	  });
	}

	// fonction de mise à jour du mot de passe
	updatePassword(newPassword: string, oldPassword: string):
		firebase.Promise<any> {
		  const credential =  firebase.auth.EmailAuthProvider
		    .credential(this.currentUser.email, oldPassword);

		  return this.currentUser.reauthenticateWithCredential(credential)
		  .then( user => {
		    this.currentUser.updatePassword(newPassword).then( user => {
		      console.log("Mot de passe modifié");
		    }, error => {
		      console.log(error);
		    });
		  });
		}

}
