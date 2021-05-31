import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userData = {"nombre":"", "apellido":"","correo":"", "contrasena":"","direccion":"","fecha_nacimiento":"","telefono":""};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  Registro(){

  }

  IrLogin(){
    this.navCtrl.pop();
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    
}


