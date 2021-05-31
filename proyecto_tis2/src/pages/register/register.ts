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
  nombre:string;
  apellido:string;
  correo:string;
  contrasena:string;
  direccion:string;
  fecha_nacimiento:Date;
  telefono:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  Registro(){
    if(this.nombre==undefined || this.apellido==undefined || this.correo==undefined || this.contrasena==undefined 
      || this.direccion==undefined || this.fecha_nacimiento==undefined || this.telefono==undefined ){
      alert("Ingrese todos los datos");
    }else{
    
  }
  }

  IrLogin(){
    this.navCtrl.pop();
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    
}


