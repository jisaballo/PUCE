import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CitaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cita',
  templateUrl: 'cita.html',
})
export class CitaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitaPage');
  }
  agendar(){
    let alert = this.alertCtrl.create({
      title: 'Creacion de cita!',
      subTitle: 'Su cita ha sido creada correctamente!',
      buttons: ['OK']
    });
    alert.present();
  }
}
