import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarPage } from '../search-bar/search-bar';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  correo: any;
  contrasena: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
