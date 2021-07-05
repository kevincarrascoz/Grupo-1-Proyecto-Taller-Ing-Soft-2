import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarPage } from '../search-bar/search-bar';

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
  correo: any;
  perfil: any;
  direccion: any;
  telefono: any;
  fecha_nacimiento: any;
  nombre: any;
  apellido: any;
  comuna: any;
  codigo_comuna: any;
  nombre_comuna: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.correo = navParams.get('correo');
    console.log(this.correo);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
