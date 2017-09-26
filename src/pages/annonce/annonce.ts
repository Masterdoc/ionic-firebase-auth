import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnnoncePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonce',
  templateUrl: 'annonce.html',
})
export class AnnoncePage {
	public annonce: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.annonce = navParams.get('annonce');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncePage');
  }

}
