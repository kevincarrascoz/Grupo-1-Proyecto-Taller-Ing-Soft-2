import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { NgForOf } from '@angular/common';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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

  email:string;
  password:string;
  usuarios:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {


    this.http.get('http://localhost/xampp/otraprueba/post_usuario.php')
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.email==undefined || this.password==undefined){
      alert("Ingrese todos los datos");
    }else{
    console.log("Email: "+ this.email);
    console.log("Password: "+ this.password);
  }
  }

  IrRegistro(){
    this.navCtrl.push(RegisterPage)
  }
  
}
