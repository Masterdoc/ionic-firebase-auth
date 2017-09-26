import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, ModalController } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the EnvoieColisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-hop',
  templateUrl: 'home-hop.html',
})
export class HomeHopPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  public firstPage: boolean = false;
  public secondPage: boolean = true;
  public lastPage: boolean = true;

  formData = {
    nom: '',
    prenoms: '',
    rib: ''
  }

  constructor(private  modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnvoieColisPage');
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

  submitForm(){
    let alert = this.alertCtrl.create({
      title: 'Succès',
      message: 'Merci pour votre\n' +
      'confiance Hyacinthe !',
      buttons: ['OK']
    });
    alert.present();
  }

  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}
