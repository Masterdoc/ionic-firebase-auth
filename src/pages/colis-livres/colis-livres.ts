import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnonceProvider } from '../../providers/annonce/annonce';
import firebase from 'firebase';

/**
 * Generated class for the ColisLivresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colis-livres',
  templateUrl: 'colis-livres.html',
})
export class ColisLivresPage {
  public annonces: any;
  private userId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public annoncePro: AnnonceProvider) {
  	//l'id de l'utilisateur
  	this.userId = firebase.auth().currentUser.uid;
  	this.annoncePro.getUserOperation().subscribe((resp) => {
    	this.annonces = resp;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColisLivresPage');
  }

  //filtrer les operations et garder les colis livres
  livraisonFilter(uid){
  	if (uid == this.userId) {
  		//console.log(uid);
  		return true;
  	}
  	else{
  		return false;
  	}
  }
}
