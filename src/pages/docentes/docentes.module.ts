import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocentesPage } from './docentes';

@NgModule({
  declarations: [
    DocentesPage,
  ],
  imports: [
    IonicPageModule.forChild(DocentesPage),
  ],
  exports: [
    DocentesPage
  ]
})
export class DocentesPageModule {}
