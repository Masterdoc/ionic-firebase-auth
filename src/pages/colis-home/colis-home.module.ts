import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColisHomePage } from './colis-home';

@NgModule({
  declarations: [
    ColisHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ColisHomePage),
  ],
})
export class ColisHomePageModule {}
