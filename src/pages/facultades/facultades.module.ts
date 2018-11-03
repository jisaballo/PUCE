import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacultadesPage } from './facultades';

@NgModule({
  declarations: [
    FacultadesPage,
  ],
  imports: [
    IonicPageModule.forChild(FacultadesPage),
  ],
  exports: [
    FacultadesPage
  ]
})
export class FacultadesPageModule {}
