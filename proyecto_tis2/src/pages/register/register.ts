import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';
import { HomePage } from '../home/home';


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
  responseData:any;
  userData = {"nombre":"", "apellido":"","correo":"", "contrasena":"","direccion":"","fecha_nacimiento":"","telefono":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:Provider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Registro(){
    this.provider.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(HomePage);
      }
      else{ console.log("User already exists"); }
    }, (err) => {
      // Error log
    });

  }
  IrLogin(){
    this.navCtrl.pop();
  }

    

    
}
function presentToast() {
  throw new Error('Function not implemented.');
}

