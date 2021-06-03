import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';
import { PublicarPage } from '../publicar/publicar';
import { PublicacionesPage } from '../publicaciones/publicaciones';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

  }


  IrLogin(){
    this.navCtrl.push(LoginPage);
  }
  IrPublicar(){
    this.navCtrl.push(PublicarPage);
  }
  IrPublicaciones(){
    this.navCtrl.push(PublicacionesPage);
  }

  ionViewDidLoad(){
    console.log('Ya cargo ListadoPage');
  }


}
