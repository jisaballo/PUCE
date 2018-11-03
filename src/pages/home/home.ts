import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

import { MisionPage } from '../mision/mision';
import { VisionPage } from '../vision/vision';
import { FacultadesPage } from '../facultades/facultades';
import { EventosPage } from '../eventos/eventos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  visionPage : any;
  homeSegment : string = "inicio";
  noticias : any;
  preview : any;
  
  constructor(public navCtrl: NavController, public redditService: RedditDataProvider) {
    this.noticias = null;

    this.redditService.getNoticias()
    .then(data => {
		  this.noticias = data.noticias;
		},err => console.log(err));
  }

  redirectFacultades(){
    this.navCtrl.push(FacultadesPage);
  }

  redirectPlanEstrategico(){
    this.navCtrl.push(VisionPage);
  }

  redirectEventos(){
    this.navCtrl.push(EventosPage);
  }
}
