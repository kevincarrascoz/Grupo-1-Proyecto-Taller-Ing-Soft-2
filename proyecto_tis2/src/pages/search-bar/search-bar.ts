import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {Headers, RequestOptions}  from "@angular/http";
import 'rxjs/add/operator/map';
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';


/**
 * Generated class for the SearchBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html',
})
export class SearchBarPage {
  publicaciones:any;
  id:any;
  correo: any;
  contrasena: any;
  temp_data: any;
  correo1: any;
  public isSearchbarOpened = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    console.log(this.correo,this.contrasena);
    this.http.get('https://edein.cl/equipo1/API/publicaciones.php/')
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/publicaciones.php/')
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = data;
        console.log(this.publicaciones);
        this.temp_data = this.publicaciones;
        for (let i = 0; i < data; i++) {
        this.publicaciones.push( this.publicaciones.length );
      }
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );
  }
  onSearch(event){
    console.log(event.target.value);
    const val = event.target.value;
    if(val && val.trim() != ""){
      this.publicaciones = this.publicaciones.filter(ofi => {
        return ((ofi.nombre_oficio.toLowerCase().indexOf(val.toLowerCase())>-1) || (ofi.nombre_comuna.toLowerCase().indexOf(val.toLowerCase()) > -1) || (ofi.nombre_region.toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
    else{
      this.resetFilter();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBarPage'); 
    
  }
  resetFilter(){
    this.publicaciones = this.temp_data;
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
      this.navCtrl.push(DetallepublicacionPage,{valor:id})
    }
    else{
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
        
      this.navCtrl.push(DetallepublicacionPage,{valor:id, correo: this.correo, contrasena: this.contrasena});
    }
  }
}
