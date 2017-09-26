import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
  username: string = '';
	captureDataUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public alertCtrl: AlertController,
    private storage: Storage) {
  	this.alertCtrl = alertCtrl;

    firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.username = user.displayName;
      }
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

  ColisLivresPage(){ this.navCtrl.push('ColisLivresPage'); }
  ColisHomePage(){ this.navCtrl.push('ColisHomePage'); }
  ColisExpediesPage(){ this.navCtrl.push('ColisExpediesPage'); }
  EnvoieColisPage(){ this.navCtrl.push('EnvoieColisPage'); }
  ConvoieColisPage(){ this.navCtrl.push('ConvoisColisPage'); }
  HomeHopPage(){ this.navCtrl.push('HomeHopPage'); }

}
