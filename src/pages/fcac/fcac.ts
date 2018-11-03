import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MisionFcacPage } from '../mision-fcac/mision-fcac';
import { VisionFcacPage } from '../vision-fcac/vision-fcac';
import { DocentesPage } from '../docentes/docentes';
import { DocentesParcialesPage } from '../docentes-parciales/docentes-parciales';
import { FcacEventosPage } from '../fcac-eventos/fcac-eventos';
import { CitaPage } from '../cita/cita';

/**
 * Generated class for the FcacPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fcac',
  templateUrl: 'fcac.html',
})
export class FcacPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FcacPage');
  }
  docentes(){
    this.navCtrl.push(DocentesPage);
  }
  docentes_parciales(){
    this.navCtrl.push(DocentesParcialesPage);
  }
  mision(){
    this.navCtrl.push(MisionFcacPage);
  }
  vision(){
    this.navCtrl.push(VisionFcacPage);
  }
  redirectEventos(){
    this.navCtrl.push(FcacEventosPage);
  }
  cita(){
    this.navCtrl.push(CitaPage);
  }

}
