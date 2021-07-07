import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarPage } from '../search-bar/search-bar';
import {Headers, RequestOptions}  from "@angular/http";
import 'rxjs/add/operator/map';
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  publicaciones:any = [];
  id:any;
  correo:any;
  id_publicacion:any;
  data:any;

  contrasena: any;
  oficio: any;
  correo1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    console.log(this.correo,this.contrasena);  

    

    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/historialget.php/?correo='+this.correo)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = data;
        console.log(this.publicaciones);
      },
      err =>{
        console.log("Nada!");
        //this.presentToast("No existen registros aun");
      }
      );
    
  }


  detalle(id){
    this.navCtrl.push(DetallepublicacionPage,{valor:id, correo: this.correo});  
    
  }
    
  



  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
