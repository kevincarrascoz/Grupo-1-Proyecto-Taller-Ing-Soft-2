import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';



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
    this.http.get('https://edein.cl/equipo1/API/comuna.php')
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/comuna.php')
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
          message: 'Ingrese el correo electrónico', 
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
          message: 'Ingrese el teléfono', 
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
        comuna: this.comuna.value,
      };
      console.log(data);
      let loader = this.loading.create({
        content: 'Processing please wait...',
      });
      loader.present().then(() => {
        this.http.post('https://edein.cl/equipo1/API/register.php',data, options)
        //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/register.php',data, options)
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
            message: 'El registro ha fallado', 
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


