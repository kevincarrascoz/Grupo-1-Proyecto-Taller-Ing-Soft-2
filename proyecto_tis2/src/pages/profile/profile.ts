import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http}  from "@angular/http";
import { SearchBarPage } from '../search-bar/search-bar';
import { MispublicacionesPage } from '../mispublicaciones/mispublicaciones';
import { ModificarperfilPage } from '../modificarperfil/modificarperfil';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  correo: any;
  perfil: any = [];
  comuna: any;
  codigo_comuna: any;
  nombre_comuna: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    console.log(this.correo);
    this.http.get('https://edein.cl/equipo1/API/perfil.php/?correo='+this.correo)
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/perfil.php/?correo='+this.correo)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.perfil = [data];
        this.codigo_comuna=data.codigo_comuna;
        console.log(data);
        
        this.http.get('https://edein.cl/equipo1/API/comuna.php/?codigo_comuna='+this.codigo_comuna)
        //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/comuna.php/?codigo_comuna='+this.codigo_comuna)
        .map(response => response.json())
        .subscribe(data2 =>
          {
            this.comuna = data2;
            this.nombre_comuna=data2.nombre_comuna;
            console.log(data2);
            
          },
          err =>{
            console.log("Oops!");
            //this.presentToast("No existen registros aun");
          }
          );

      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }

  publi(){
    this.navCtrl.push(MispublicacionesPage, {correo: this.correo});
  } 

  modPerfil(){
    this.navCtrl.push(ModificarperfilPage, {correo: this.correo});
  }
}
