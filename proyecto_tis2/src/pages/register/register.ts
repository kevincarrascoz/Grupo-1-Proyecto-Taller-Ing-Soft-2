import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
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
  @ViewChild("nombre") nombre;
  @ViewChild("apellido") apellido;
  @ViewChild("correo") correo;
  @ViewChild("contrasena") contrasena;
  @ViewChild("direccion") direccion;
  @ViewChild("fecha_nacimiento") fecha_nacimiento;
  @ViewChild("telefono") telefono;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
  }


  Registro(){
    if(this.nombre==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el nombre', 
          duration: 3000
        });
        toast.present();
    }else if(this.apellido==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el apellido', 
          duration: 3000
        });
        toast.present();
    }else if(this.correo==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el correo electronico', 
          duration: 3000
        });
        toast.present();
    }else if(this.contrasena==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la contraseña', 
          duration: 3000
        });
        toast.present();
    }else if(this.direccion==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la dirección', 
          duration: 3000
        });
        toast.present();
    }else if(this.fecha_nacimiento==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la fecha de nacimiento', 
          duration: 3000
        });
        toast.present();
    }else if(this.telefono==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el telefono', 
          duration: 3000
        });
        toast.present();
    }else{

      var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });



      let data = {
        nombre: this.nombre.value,
        apellido: this.apellido.value,
        correo: this.correo.value,
        contrasena: this.contrasena.value,
        direccion: this.direccion.value,
        fecha_nacimiento: this.fecha_nacimiento.value,
        telefono: this.telefono.value
      };
      console.log(data);
      let loader = this.loading.create({
        content: 'Processing please wait...',
      });
      loader.present().then(() => {
        this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/register.php',data, options)
        .map(res => res.json())
        .subscribe(res => {
        
         loader.dismiss()
        if(res=="Registration successfull"){
          const toast = this.toastCtrl.create({
            message: 'Registro Exitoso', 
            duration: 3000
          });
        toast.present();
        
        }else
        {
          const toast = this.toastCtrl.create({
            message: 'Fallo en registro', 
            duration: 3000
          });
          toast.present();
          } 
        });
        });
    }
  }

  IrLogin(){
    this.navCtrl.pop();
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    
}


