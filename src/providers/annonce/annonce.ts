import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AnnonceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AnnonceProvider {

  public userProfile:firebase.database.Reference;
  public currentUser:firebase.User;

  constructor(public http: Http,
    private storage: Storage,
    public afAuth: AngularFireAuth, 
    public af: AngularFireDatabase) {
    console.log('Hello AnnonceProvider Provider');
  }

  // fonction de mise à jour du nom et du prenoms
  updateName(firstName: string, lastName: string): firebase.Promise<void> {
	  return this.userProfile.update({
	    firstName: firstName,
	    lastName: lastName,
	  });
	}

  addAnnonceData(objet, descriptif, provenance, destination, photo, categorie, publie,  
          delaisLivraison, 
          estimation,
          propositionTarif,
          expiration,
          numeroCarte,
          imageInfo,
          assurance,
          relais): firebase.Promise<void> {
	  
	  // A post entry.
	  var annonceData = {
	  	uid: firebase.auth().currentUser.uid,
	    auteur: firebase.auth().currentUser.displayName,
	    objet: objet,
	    descriptif : descriptif,
	    provenance: provenance,
	    destination: destination,
	    photo : photo,
	    categorie: categorie,
	    publie: publie,
	    delaisLivraison: delaisLivraison, 
        estimation: estimation,
        propositionTarif: propositionTarif,
        expiration: expiration,
        numeroCarte: numeroCarte,
        imageInfo: imageInfo,
        assurance: assurance,
        relais: relais
	  };
	  var newPostKey = firebase.database().ref().child('annonce').push().key;
	  var add = {};

	  //return firebase.database().ref('annonce/annonce'+newPostKey).set(annonceData);

	  add['/annonce/annonce' + newPostKey] = annonceData;
	  add['/operation/' + firebase.auth().currentUser.uid + '/annonce' + newPostKey] = annonceData;

	  return firebase.database().ref().update(add);
	  //return this.af.list('').push(add);
	}

	//get annonce
	// Get users annonces
  getUserExpedition() {
    return this.af.list('/operation/'+firebase.auth().currentUser.uid, {
    	query: {
        orderByChild: 'uid',
        equalTo: firebase.auth().currentUser.uid
      }
    });
  }

  //get annonce
	// Get users annonces
  getUserOperation() {
    return this.af.list('/operation/'+firebase.auth().currentUser.uid, {});
  }

  getAnnonces() {
    return this.af.list('/annonce', {});
  }
}
