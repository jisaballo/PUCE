import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditDataProvider {

  docentes: any;
  docentes_parciales: any;
  facultades: any;
  integrantes: any;
  noticias: any;
  eventos: any;
  fcac_eventos: any;

  constructor(public http: HttpClient) {
    console.log('Hello RedditDataProvider Provider');
  }

  getDocentes(fac){
    let result;

    if(this.docentes){
  		result = Promise.resolve(this.docentes);
    } else {
      result = new Promise((resolve, reject)=> {
        this.http.get('assets/data/staf.json')
        .toPromise()
        .then(response => {
          console.log(response);
        })
      })
    }
    return result;
  }

  getDocentesPaarciales(fac){
    let result;
    if(this.docentes_parciales){
  		result = Promise.resolve(this.docentes_parciales);
  	} else {
      result = new Promise((resolve, reject) => {
        this.http.get('assets/data/staf_parcial.json')
        .toPromise()
        .then(response => {
          console.log(response);
        })
      })
    }
    return result;
  }

  getFacultades(){
    let result;
    if(this.facultades){
  		result = Promise.resolve(this.facultades);
  	} else {
      result = new Promise((resolve,reject) => {
        this.http.get('assets/data/facultades.json')
        .toPromise()
        .then(response => {
          console.log(response);
        })
      })
    }
    return result;
  }

  getIntegrantes(){
    let result;
    if(this.integrantes){
  		result = Promise.resolve(this.integrantes);
  	} else {
      result = new Promise((resolve, reject) => {
        this.http.get('assets/data/integrantes.json')
        .toPromise()
        .then(response => {
          console.log(response);
        })
      })
    }
    return result;
  }

  getNoticias(){
    let result;
    if(this.noticias){
  		result = Promise.resolve(this.noticias);
  	} else {
      result = new Promise((resolve, reject) => {
        this.http.get('assets/data/noticias.json')
        .toPromise()
        .then(response => {
          resolve(response);
        }, msg => {
          reject(msg);
        })
      })
    }
    return result;
  }

  getEventos(){
    let result;
    if(this.eventos){
  		result = Promise.resolve(this.eventos);
  	} else {
      result = new Promise((resolve, reject) => {
        this.http.get('assets/data/eventos.json')
        .toPromise()
        .then(response => {
          console.log(response);
        })
      })
    }
    return result;
  }

  getFCACEventos(){
    let result;
    if(this.fcac_eventos){
  		result = Promise.resolve(this.fcac_eventos);
  	} else {
      result = new Promise((resolve, reject) => {
        this.http.get('assets/data/eventos_fcac.json')
        .toPromise()
        .then(response => {
          console.log(response);
        })
      })
    }
    return result;
  }
}
