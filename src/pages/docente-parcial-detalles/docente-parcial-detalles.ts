import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

/**
 * Generated class for the DocenteParcialDetallesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-docente-parcial-detalles',
  templateUrl: 'docente-parcial-detalles.html',
})
export class DocenteParcialDetallesPage {

  id : any;
  maestro : any;
  info: string = "perfil";

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.id = navParams.get('id');

    this.redditService.getDocentesPaarciales(2).then(
		  data => {
		    this.maestro = data[0].profesor[this.id-1];
		},err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocenteParcialDetallesPage');
  }

}
