import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisionFcacPage } from './mision-fcac';

@NgModule({
  declarations: [
    MisionFcacPage,
  ],
  imports: [
    IonicPageModule.forChild(MisionFcacPage),
  ],
  exports: [
    MisionFcacPage
  ]
})
export class MisionFcacPageModule {}
