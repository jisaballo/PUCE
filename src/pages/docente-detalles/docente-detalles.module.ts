import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocenteDetallesPage } from './docente-detalles';

@NgModule({
  declarations: [
    DocenteDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(DocenteDetallesPage),
  ],
  exports: [
    DocenteDetallesPage
  ]
})
export class DocenteDetallesPageModule {}
