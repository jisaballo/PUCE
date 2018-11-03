import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

/**
 * Generated class for the FcacEventosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fcac-eventos',
  templateUrl: 'fcac-eventos.html',
})
export class FcacEventosPage {

  eventos : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.eventos = null;
	  this.redditService.getFCACEventos().then(
		data => {
		this.eventos = data.eventos;
		},err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FcacEventosPage');
  }

}
