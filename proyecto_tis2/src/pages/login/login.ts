import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { NgForOf } from '@angular/common';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import { PublicarPage } from '../publicar/publicar';
import { Events } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild("correo") correo;
  @ViewChild("contrasena") contrasena;
  usuarios:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController, public events:Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.correo.value==""){
      const toast = this.toastCtrl.create({
        message: 'Ingrese su correo electrónico', 
        duration: 3000
      });
      toast.present();
  }else if(this.contrasena.value==""){
      const toast = this.toastCtrl.create({
        message: 'Ingrese su contraseña', 
        duration: 3000
      });
      toast.present();
  }else{
    console.log("Correo Electrónico: "+ this.correo.value);
    console.log("Contraseña: "+ this.contrasena.value);
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let data = {
      correo: this.correo.value,
      contrasena: this.contrasena.value
    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {


      this.http.post('http://localhost/xampp/Proyecto_Taller_Ing_2/proyecto_tis2/login.php', data, options)
      .map(res => res.json())
      .subscribe(res => {
      console.log(res)
       loader.dismiss()
      if(res=="Your Login success"){
       
        const toast = this.toastCtrl.create({
          message: 'Ingreso realizado correctamente', 
          duration: 3000
        });
        toast.present();
          this.events.publish('user:loggedin', {correo: this.correo.value, contrasena: this.contrasena.value}, Date.now());
          console.log(data);
          this.navCtrl.setRoot(PublicacionesPage, {correo: this.correo.value, contrasena: this.contrasena.value});
      }else
      {
        const toast = this.toastCtrl.create({
          message: 'Error, intentelo denuevo', 
          duration: 3000
        });
        toast.present();
        } 
      });
      });
  }
  }

  IrRegistro(){
    this.navCtrl.push(RegisterPage)
  }
  
}
