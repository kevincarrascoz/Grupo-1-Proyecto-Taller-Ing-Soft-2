import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';


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
  @ViewChild("comuna") comuna;
  comunas:any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/comuna.php')
    .map(response => response.json())
    .subscribe(data =>
      {
        this.comunas = data;
        console.log(data);
        console.log(this.comunas);
        
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );
  }


  Registro(){
    if(this.nombre.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el nombre', 
          duration: 3000
        });
        toast.present();
    }else if(this.apellido.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el apellido', 
          duration: 3000
        });
        toast.present();
    }else if(this.correo.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el correo electronico', 
          duration: 3000
        });
        toast.present();
    }else if(this.contrasena.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la contraseña', 
          duration: 3000
        });
        toast.present();
    }else if(this.direccion.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la dirección', 
          duration: 3000
        });
        toast.present();
    }else if(this.fecha_nacimiento.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la fecha de nacimiento', 
          duration: 3000
        });
        toast.present();
    }else if(this.telefono.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el telefono', 
          duration: 3000
        });
        toast.present();
    }else if(this.comuna.value==""){
      const toast = this.toastCtrl.create({
        message: 'Ingrese la comuna', 
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
        telefono: this.telefono.value,
        comuna: this.comuna.value
      };
      console.log(data);
      let loader = this.loading.create({
        content: 'Processing please wait...',
      });
      loader.present().then(() => {
        this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/register.php',data, options)
        //this.http.post('https://proyectooficiosapp.000webhostapp.com/register.php',data, options)
        .map(res => res.json())
        .subscribe(res => {
        
         loader.dismiss()
        if(res=="Registration successfull"){
          const toast = this.toastCtrl.create({
            message: 'Registro Exitoso', 
            duration: 3000,
          });
        toast.present();
        this.navCtrl.pop();
        
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


