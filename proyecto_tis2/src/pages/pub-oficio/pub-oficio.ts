import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Headers, RequestOptions}  from "@angular/http";
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';
import 'rxjs/add/operator/map';
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
  data2:any;
  correo:any;
  contrasena: any;
  correo1: any;
  public publicaciones_empty = false;
  isUserLogged= false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    console.log(this.correo,this.contrasena);
    if(this.correo && this.contrasena != ''){
      this.isUserLogged = true;
    }
    this.http.get("https://edein.cl/equipo1/API/pub_oficio.php?id_oficio="+this.id_oficio)
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/pub_oficio.php?id_oficio="+this.id_oficio)
    .map(response => response.json())
    .subscribe(data => {
      this.publicaciones = data;
        console.log(this.publicaciones);
        if(this.publicaciones.length === 0){
          this.publicaciones_empty = true;
        }
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
    if(this.correo1==this.correo){
      this.navCtrl.push(DetallepublicacionPage,{valor:id});
    }else{
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
       let data2 = {
        correo: this.correo,
        id_publicacion: id,
      };
      console.log(data2);
      this.http.post('https://edein.cl/equipo1/API/historial.php',data2, options)
      //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/historial.php',data2, options)
        .map(res => res.json())
        .subscribe(res => {
        
       
        if(res=="Historial exitoso"){
        
            console.log('registro exitoso');
          }
        
        else
        {
        console.log('error');
          } 
        });
        
      this.navCtrl.push(DetallepublicacionPage,{valor:id, correo: this.correo});
    }
    
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
