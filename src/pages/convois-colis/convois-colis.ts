import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';

/**
 * Generated class for the EnvoieColisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convois-colis',
  templateUrl: 'convois-colis.html',
})

export class ConvoisColisPage {
  public firstPage: boolean = false;
  public secondPage: boolean = true;
  public thirdPage: boolean = true;
  public fourthPage: boolean = true;
  public lastPage: boolean = true;

  formData = {
    provenance: '',
    destination: '',
    heureDepart: '',
    heureArrivee: '',
    rekais: '',
    tarif: '',
    nom: '',
    prenoms: '',
    rib: '',
    detour: '',
    taille: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;
  }

  goToPage1() {
    this.firstPage = false;
    this.secondPage = true;
    this.lastPage = true;
  }
  
  goToPage2() {
    this.firstPage = true;
    this.secondPage = false;
    this.lastPage = true;
  }

  goToPage3() {
    this.firstPage = true;
    this.secondPage = true;
    this.lastPage = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnvoieColisPage');
  }

  submitForm(){
    let alert = this.alertCtrl.create({
      title: 'Succès',
      message: 'Merci pour votre\n' +
      'confiance Hyacinthe !',
      buttons: ['OK']
    });
    alert.present();
  }
  
}
