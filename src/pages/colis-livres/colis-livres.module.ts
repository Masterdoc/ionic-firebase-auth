import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColisLivresPage } from './colis-livres';

@NgModule({
  declarations: [
    ColisLivresPage,
  ],
  imports: [
    IonicPageModule.forChild(ColisLivresPage),
  ],
})
export class ColisLivresPageModule {}
