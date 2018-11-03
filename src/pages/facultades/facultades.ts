import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FcacPage } from '../fcac/fcac';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

/**
 * Generated class for the FacultadesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-facultades',
  templateUrl: 'facultades.html',
})
export class FacultadesPage {

  facultades : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.facultades = null;
	  this.redditService.getFacultades().then(
		data => {
		this.facultades = data.facultades;
		},err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultadesPage');
  }
  show_detalles_facultad(id){
    if(id == 2)
      this.navCtrl.push(FcacPage);
  }

}
