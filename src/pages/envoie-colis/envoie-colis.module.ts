import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvoieColisPage } from './envoie-colis';

@NgModule({
  declarations: [
    EnvoieColisPage,
  ],
  imports: [
    IonicPageModule.forChild(EnvoieColisPage),
  ],
})
export class EnvoieColisPageModule {}
