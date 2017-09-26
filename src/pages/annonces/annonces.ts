import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnonceProvider } from '../../providers/annonce/annonce';
import firebase from 'firebase';

/**
 * Generated class for the AnnoncesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonces',
  templateUrl: 'annonces.html',
})
export class AnnoncesPage {
	formData = {
    provenance: '',
    destination: '',
    heureDepart: '',
    rayon: ''
  }

  public annonces: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public annoncePro: AnnonceProvider) {
    firebase.auth().onAuthStateChanged( user => {
      if (user){
        //var this.currentUser = user;
        //this.userProfile = firebase.database().ref(`/user/${user.uid}`);
        /*this.annonce.addAnnonceData(user.uid, 'auteur', 'objet', 'descriptif', 'provenance', 'destination', 'photo', 'categorie', 'publie')
          .then((res)=>{
            console.log(res);
          })*/
      }
    });
    
  }

  ionViewDidLoad() {

    this.annoncePro.getAnnonces().subscribe((resp) => {
      this.annonces = resp;
    })
    console.log('ionViewDidLoad AnnoncesPage');
  }

  goToAnnonce(annonce){
    this.navCtrl.push('AnnoncePage', {annonce: annonce});
  }

}
