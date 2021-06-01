import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  nombre:string;
  apellido:string;
  correo:string;
  contrasena:string;
  direccion:string;
  fecha_nacimiento:Date;
  telefono:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
  }


  Registro(){
    if(this.nombre==undefined){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el nombre', 
          duration: 3000
        });
        toast.present();
    }else if(this.apellido==undefined){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el apellido', 
          duration: 3000
        });
        toast.present();
    }else if(this.correo==undefined){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el correo electronico', 
          duration: 3000
        });
        toast.present();
    }else if(this.contrasena==undefined){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la contraseña', 
          duration: 3000
        });
        toast.present();
    }else if(this.direccion==undefined){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la dirección', 
          duration: 3000
        });
        toast.present();
    }else if(this.fecha_nacimiento==undefined){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la fecha de nacimiento', 
          duration: 3000
        });
        toast.present();
    }else if(this.telefono==undefined){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el telefono', 
          duration: 3000
        });
        toast.present();
    }else{
      let body = {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        contrasena: this.contrasena,
        direccion: this.direccion,
        fecha_nacimiento: this.fecha_nacimiento,
        telefono: this.telefono,
  
      }
      console.log(body);
      this.http.post('http://localhost/xampp/otraprueba/post_usuario.php', body)
      .map(response => response.json())
      .subscribe(data =>
        {
          body = data;
  
          console.log(data);
          
        },
        err =>{
          console.log("Oops!");
          //this.presentToast("No existen registros aun");
        }
        );
    }
  }

  IrLogin(){
    this.navCtrl.pop();
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    
}


