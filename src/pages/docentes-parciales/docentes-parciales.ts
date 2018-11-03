import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import { DocenteParcialDetallesPage } from '../docente-parcial-detalles/docente-parcial-detalles';

/**
 * Generated class for the DocentesParcialesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-docentes-parciales',
  templateUrl: 'docentes-parciales.html',
})
export class DocentesParcialesPage {

  staf_parciales: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.getStafParcial();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocentesParcialesPage');
  }

  getStafParcial(){
    this.redditService.getDocentesPaarciales(2).then(
		  data => {
		    this.staf_parciales = data[0].profesor;
		},err => console.log(err));
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.staf_parciales = this.staf_parciales.filter((item) => {
        return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.getStafParcial();
    }
  }
  
  getAllItems(){
    this.getStafParcial();
  }

    prof_detalles(prof_id){
    this.navCtrl.push(DocenteParcialDetallesPage , {
      id: prof_id
    });
  }
}
