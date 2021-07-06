import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PubOficioPage } from '../pub-oficio/pub-oficio';
import { SearchBarPage } from '../search-bar/search-bar';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  nombre_oficio:any;
  oficio:any;
  correo: any;
  contrasena: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/oficio.php/')
    //this.http.get('https://proyectooficiosapp.000webhostapp.com/oficio.php')
    .map(response => response.json())
    .subscribe(data =>
      {
        this.oficio = data;
        this.nombre_oficio=data.nombre_oficio;
        console.log(this.nombre_oficio);
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
  verPubOficio(id_oficio){
    this.navCtrl.push(PubOficioPage, {valor: id_oficio, correo: this.correo, contrasena: this.contrasena});
  }
}
