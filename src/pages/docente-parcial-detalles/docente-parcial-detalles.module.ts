import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocenteParcialDetallesPage } from './docente-parcial-detalles';

@NgModule({
  declarations: [
    DocenteParcialDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(DocenteParcialDetallesPage),
  ],
  exports: [
    DocenteParcialDetallesPage
  ]
})
export class DocenteParcialDetallesPageModule {}
