import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import { DocenteDetallesPage } from '../docente-detalles/docente-detalles';

/**
 * Generated class for the DocentesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-docentes',
  templateUrl: 'docentes.html',
})
export class DocentesPage {

  staf: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.getStaf();
  }

  ionViewDidLoad() {
    
  }

  getStaf(){
    this.redditService.getDocentes(2).then(
		  data => {
		    this.staf = data[0].profesor;
		},err => console.log(err));
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.staf = this.staf.filter((item) => {
        return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.getStaf();
    }
  }
  
  getAllItems(){
    this.getStaf();
  }

  prof_detalles(prof_id){
    this.navCtrl.push(DocenteDetallesPage , {
      id: prof_id
    });
  }

}
