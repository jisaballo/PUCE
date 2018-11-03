import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocentesParcialesPage } from './docentes-parciales';

@NgModule({
  declarations: [
    DocentesParcialesPage,
  ],
  imports: [
    IonicPageModule.forChild(DocentesParcialesPage),
  ],
  exports: [
    DocentesParcialesPage
  ]
})
export class DocentesParcialesPageModule {}
