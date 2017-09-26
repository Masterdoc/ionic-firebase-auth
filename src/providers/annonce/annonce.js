var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the AnnonceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AnnonceProvider = (function () {
    function AnnonceProvider(http, storage, afAuth, af) {
        this.http = http;
        this.storage = storage;
        this.afAuth = afAuth;
        this.af = af;
        console.log('Hello AnnonceProvider Provider');
    }
    // fonction de mise à jour du nom et du prenoms
    AnnonceProvider.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.update({
            firstName: firstName,
            lastName: lastName,
        });
    };
    AnnonceProvider.prototype.addAnnonceData = function (uid, auteur, objet, descriptif, provenance, destination, photo, categorie, publie) {
        // A post entry.
        var annonceData = {
            uid: uid,
            auteur: auteur,
            objet: objet,
            descriptif: descriptif,
            provenance: provenance,
            destination: destination,
            photo: photo,
            categorie: categorie,
            publie: publie
        };
        var newPostKey = firebase.database().ref().child('annonce').push().key;
        var add = {};
        //return firebase.database().ref('annonce/annonce'+newPostKey).set(annonceData);
        add['/annonce/annonce' + newPostKey] = annonceData;
        add['/operation/' + uid + '/annonce' + newPostKey] = annonceData;
        return firebase.database().ref().update(add);
    };
    //get annonce
    // Get users annonces
    AnnonceProvider.prototype.getUserExpedition = function () {
        return this.af.list('/operation/' + firebase.auth().currentUser.uid, {
            query: {
                orderByChild: 'uid',
                equalTo: firebase.auth().currentUser.uid
            }
        });
    };
    //get annonce
    // Get users annonces
    AnnonceProvider.prototype.getUserOperation = function () {
        return this.af.list('/operation/' + firebase.auth().currentUser.uid, {});
    };
    return AnnonceProvider;
}());
AnnonceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Storage,
        AngularFireAuth,
        AngularFireDatabase])
], AnnonceProvider);
export { AnnonceProvider };
//# sourceMappingURL=annonce.js.map