import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import {Headers, RequestOptions}  from "@angular/http";
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';
import { DetallepublicacionLogoutPage } from '../detallepublicacion-logout/detallepublicacion-logout';
import { options } from 'sw-toolbox';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { SearchBarPage } from '../search-bar/search-bar';

/**
 * Generated class for the PubOficioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pub-oficio',
  templateUrl: 'pub-oficio.html',
})
export class PubOficioPage {
  id_oficio = this.navParams.get('valor');
  publicaciones: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    console.log(this.id_oficio);
    this.http.get("http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/pub_oficio.php?id_oficio="+this.id_oficio)
    .map(response => response.json())
    .subscribe(data => {
      this.publicaciones = data;
        console.log(this.publicaciones);

        for (let i = 0; i < data; i++) {
        this.publicaciones.push( this.publicaciones.length );
      }
    }, err => {
      console.log("Oops!");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PubOficioPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < this.publicaciones; i++) {
        this.publicaciones.push( this.publicaciones.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  detalle(id){
    this.navCtrl.push(DetallepublicacionPage, {valor: id});
  }
  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
