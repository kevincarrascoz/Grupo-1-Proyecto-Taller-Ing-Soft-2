import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  items = [
    'Albañil',
    'Carpintero',
    'Conserje',
    'Conductor',
    'Electricista',
    'Empleado Domestico',
    'Estilista',
    'Gasfiter',
    'Guardia de seguridad',
    'Mecanico',
    'Sastre',
    'Relojero'
  ];
   
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }

}
