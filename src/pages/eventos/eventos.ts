import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

/**
 * Generated class for the EventosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.eventos = null;
	  this.redditService.getEventos().then(
		data => {
		this.eventos = data.eventos;
		},err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

}
