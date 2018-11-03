import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FcacPage } from './fcac';

@NgModule({
  declarations: [
    FcacPage,
  ],
  imports: [
    IonicPageModule.forChild(FcacPage),
  ],
  exports: [
    FcacPage
  ]
})
export class FcacPageModule {}
