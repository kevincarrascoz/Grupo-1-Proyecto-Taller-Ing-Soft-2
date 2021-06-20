import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { SearchBarPage } from '../search-bar/search-bar';

/**
 * Generated class for the PublicarLogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicar-logout',
  templateUrl: 'publicar-logout.html',
})
export class PublicarLogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  IrLogin(){
    this.navCtrl.push(LoginPage)
  }
  IrRegistro(){
    this.navCtrl.push(RegisterPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarLogoutPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
