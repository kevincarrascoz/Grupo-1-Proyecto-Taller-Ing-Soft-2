import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

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
  user = { id: '', first_name: '', last_name: '', email: '', password: '', direccion: '', fecha_nacimiento: '', celular: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  IrLogin(){
    this.navCtrl.pop();
  }

  saveUser() { 
    this.restProvider.saveUser(this.user).then((result) => { 
    console.log("espacio"); 
    console.log(result); 
    }, (err) => { 
    console.log(err); 
    }); 
    }

    

    
}
