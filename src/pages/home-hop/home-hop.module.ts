import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeHopPage } from './home-hop';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    HomeHopPage,
  ],
  imports: [
  	NgCalendarModule,
    IonicPageModule.forChild(HomeHopPage),
  ],
})
export class HomeHopPageModule {}
