import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisionFcacPage } from './vision-fcac';

@NgModule({
  declarations: [
    VisionFcacPage,
  ],
  imports: [
    IonicPageModule.forChild(VisionFcacPage),
  ],
  exports: [
    VisionFcacPage
  ]
})
export class VisionFcacPageModule {}
