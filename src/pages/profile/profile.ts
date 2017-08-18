import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { UserProfileProvider } from '../../providers/user-profile';
import { AuthProvider } from '../../providers/auth';
//import * as firebase from 'firebase/app';

/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {

  public userProfile: any = null;
  public birthDate: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
  public profileProvider: UserProfileProvider, public authProvider: AuthProvider){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

  ionViewDidEnter() {
	  this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
	    this.userProfile = userProfileSnapshot.val();
	    this.birthDate = userProfileSnapshot.val().birthDate;
	  });
	}

	logOut(){
	  this.authProvider.logoutUser().then(() => {
	    this.navCtrl.setRoot('UserLogin');
	  });
	}

	updateName(){
		let firstname, lastname = '';
		if (this.userProfile) {
			firstname = this.userProfile.firstName;
			lastname = this.userProfile.firstName;
		}
	  let alert = this.alertCtrl.create({
	    message: "Nom et prénom",
	    inputs: [
	      {
	        name: 'firstName',
	        placeholder: 'Prénoms',
	        value: firstname
	      },
	      {
	        name: 'lastName',
	        placeholder: 'Nom',
	        value: lastname
	      },
	    ],
	    buttons: [
	      {
	        text: 'Annuler',
	      },
	      {
	        text: 'Enregistrer',
	        handler: data => {
	          this.profileProvider.updateName(data.firstName, data.lastName);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

	updateDOB(birthDate){
	  this.profileProvider.updateDOB(birthDate);
	}

	updateEmail(){
	  let alert = this.alertCtrl.create({
	    inputs: [
	      {
	        name: 'newEmail',
	        placeholder: 'Email',
	      },
	      {
	        name: 'password',
	        placeholder: 'Mot de passe actuel',
	        type: 'password'
	      },
	    ],
	    buttons: [
	      {
	        text: 'Annuler',
	      },
	      {
	        text: 'Enregistrer',
	        handler: data => {
	          this.profileProvider.updateEmail(data.newEmail, data.password);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

	updatePassword(){
	  let alert = this.alertCtrl.create({
	    inputs: [
	      {
	        name: 'newPassword',
	        placeholder: 'Nouveau mot de passe',
	        type: 'password'
	      },
	      {
	        name: 'oldPassword',
	        placeholder: 'Mot de passe actuel',
	        type: 'password'
	      },
	    ],
	    buttons: [
	      {
	        text: 'Annuler',
	      },
	      {
	        text: 'Enregistrer',
	        handler: data => {
	          this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

}