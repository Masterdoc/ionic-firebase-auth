import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AnnonceProvider } from '../../providers/annonce/annonce';

/**
 * Generated class for the ColisExpediesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colis-expedies',
  templateUrl: 'colis-expedies.html',
})
export class ColisExpediesPage {

	public annonces: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public annoncePro: AnnonceProvider) {
  	/*firebase.auth().onAuthStateChanged( user => {
      if (user){
      	// Get a database reference to our posts
	var db = firebase.database();
	var ref = db.ref("/operation/" + user.uid);

	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
		//this.annonces = snapshot.val();
	  console.log(snapshot.val());
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
	}
    });*/
    this.annoncePro.getUserExpedition().subscribe((resp) => {
    	this.annonces = resp;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColisExpediesPage');
  }

}
