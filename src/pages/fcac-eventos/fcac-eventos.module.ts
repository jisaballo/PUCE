import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FcacEventosPage } from './fcac-eventos';

@NgModule({
  declarations: [
    FcacEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(FcacEventosPage),
  ],
  exports: [
    FcacEventosPage
  ]
})
export class FcacEventosPageModule {}
