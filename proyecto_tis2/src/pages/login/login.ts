import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
import { NgForOf } from '@angular/common';
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

  users: any;
  email:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getUsers();
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
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
    this.users = data;
    console.log(this.users);
    });
    }
}
