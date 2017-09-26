import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { AnnonceProvider } from '../../providers/annonce/annonce';
import firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the EnvoieColisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-envoie-colis',
  templateUrl: 'envoie-colis.html',
})
export class EnvoieColisPage {
  public firstPage: boolean = false;
  public secondPage: boolean = true;
  public thirdPage: boolean = true;
  public fourthPage: boolean = true;
  public lastPage: boolean = true;


  captureDataUrl: any;
  formData = {
    objet: '',
    descriptif: '',
    provenance: '',
    destination: '',
    delaisLivraison: '',
    photo: '',
    categorie: '',
    assurance: '',
    relais: '',
    estimation: '',
    propositionTarif: '',
    publie: '',
    expiration: '',
    numeroCarte: '',
    imageInfo: ''
  }

  constructor(private angulaFire: AngularFireDatabase, private camera: Camera, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public annonce: AnnonceProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnvoieColisPage');
  }

  @ViewChild(Slides) slides: Slides;

  goToPage1() {
    this.firstPage = false;
    this.secondPage = true;
    this.thirdPage = true;
    this.fourthPage = true;
    this.lastPage = true;
  }
  
  goToPage2() {
    this.firstPage = true;
    this.secondPage = false;
    this.thirdPage = true;
    this.fourthPage = true;
    this.lastPage = true;
  }

  goToPage3() {
    this.firstPage = true;
    this.secondPage = true;
    this.thirdPage = false;
    this.fourthPage = true;
    this.lastPage = true;
  }

  goToPage4() {
    this.firstPage = true;
    this.secondPage = true;
    this.thirdPage = true;
    this.fourthPage = false;
    this.lastPage = true;
  }

  goToPage5() {
    this.firstPage = true;
    this.secondPage = true;
    this.thirdPage = true;
    this.fourthPage = true;
    this.lastPage = false;
  }

  submitForm(){
        //this.formData.photo = this.upload();
        //var this.currentUser = user;
        //this.userProfile = firebase.database().ref(`/user/${user.uid}`);
        this.annonce.addAnnonceData(
          this.formData.objet, 
          this.formData.descriptif, 
          this.formData.provenance, 
          this.formData.destination, 
          this.formData.photo, 
          this.formData.categorie, 
          this.formData.publie, 
          this.formData.delaisLivraison, 
          this.formData.estimation,
          this.formData.propositionTarif,
          this.formData.expiration,
          this.formData.numeroCarte,
          this.formData.imageInfo,
          this.formData.assurance,
          this.formData.relais)
          .then((res)=>{
            this.showConfirmation();
          })
  }

  showConfirmation(){
    let alert = this.alertCtrl.create({
      title: 'Succès',
      message: 'Merci pour votre\n' +
      'confiance Hyacinthe !',
      buttons: ['OK']
    });
    alert.present();
  }

  capture() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  upload() {

      let storageRef = firebase.storage().ref();
      // Create a timestamp as filename
      const filename = Math.floor(Date.now() / 1000);

      // Create a reference to 'images/todays-date.jpg'
      const imageRef = storageRef.child(`images/${filename}.jpg`);

      imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
       this.formData.photo = (`images/${filename}.jpg`);
      });

  }
}
