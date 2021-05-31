import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  usuarios: any;
  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  contrasena: string = "";
  direccion: string = "";
  fecha_nacimiento: string = "";
  celular: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  IrLogin(){
    this.navCtrl.pop();
  }
  addRegister(){
    console.log(this.nombre);
    let body = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      contrasena: this.contrasena,
      direccion: this.direccion,
      fecha_nacimiento: this.fecha_nacimiento,
      celular: this.celular,

    }
    console.log(body);

    this.http.post('http://localhost/xampp/otraprueba/post_usuario.php', body)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.usuarios = data;

        console.log(data);
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );

  }

    

    
}
