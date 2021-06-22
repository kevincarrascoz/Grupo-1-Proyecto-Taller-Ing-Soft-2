import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";

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
  perfil: any;
  direccion: any;
  telefono: any;
  fecha_nacimiento: any;
  nombre: any;
  apellido: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    console.log(this.correo);
    this.http.get('http://localhost/xampp/Proyecto_Taller_Ing_2/proyecto_tis2/perfil.php/?correo='+this.correo)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.perfil = data;
        this.nombre=data.nombre;
        this.apellido=data.apellido;
        this.direccion=data.direccion;
        this.telefono=data.telefono;
        this.fecha_nacimiento=data.fecha_nacimiento;
        console.log(data);
        
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

}
