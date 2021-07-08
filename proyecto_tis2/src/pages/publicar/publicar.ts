import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { SearchBarPage } from '../search-bar/search-bar';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
/**
 * Generated class for the PublicarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicar',
  templateUrl: 'publicar.html',
})
export class PublicarPage {
  @ViewChild("descripcion") descripcion;
  @ViewChild("horario") horario;
  @ViewChild("precio") precio;
  @ViewChild("categoria") categoria;
  @ViewChild("certificado") certificado;
  @ViewChild("oficio") oficio;
  @ViewChild("edad") edad;
  oficios:any;
  correo: any;
  contrasena: any;
  public isUserLogged = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    if(this.correo && this.contrasena != ''){
      this.isUserLogged = true;
    }
    console.log(this.correo,this.contrasena);
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/oficio.php')
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/oficio.php')
    .map(response => response.json())
    .subscribe(data =>
      {
        this.oficios = data;
        console.log(data);
        
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );
  }

  Publicar(){
    if(this.descripcion.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese una descripcion', 
          duration: 3000
        });
        toast.present();
    }else if(this.horario.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el horario', 
          duration: 3000
        });
        toast.present();
    }else if(this.precio.value==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el precio', 
          duration: 3000
        });
        toast.present();
    }else if(this.oficio==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el oficio', 
          duration: 3000
        });
        toast.present();
    }else if(this.certificado==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese un certificado', 
          duration: 3000
        });
        toast.present();
    }   
    else{
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });

      let data = {
        descripcion: this.descripcion.value,
        horario: this.horario.value,
        precio: this.precio.value,
        oficio: this.oficio.value,
        correo: this.correo,
        edad: this.edad.value      
      };
      console.log(data);
      let loader = this.loading.create({
        content: 'Processing please wait...',
      });
      loader.present().then(() => {
        this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/publicar.php',data, options)
        //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/publicar.php',data, options)
        .map(res => res.json())
        .subscribe(res => {
          loader.dismiss()
          if(res=="Public successfull"){
            const toast = this.toastCtrl.create({
              message: 'Publicacion Exitosa', 
              duration: 3000
            });
          toast.present();
        }else
        {
          const toast = this.toastCtrl.create({
            message: 'Fallo en publicacion', 
            duration: 3000
          });
          toast.present();
          } 
        });
      });

  

    }
  }


  ionViewDidLoad() {
   console.log('ionViewDidLoad PublicarPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
  IrLogin(){
    this.navCtrl.push(LoginPage)
  }
  IrRegistro(){
    this.navCtrl.push(RegisterPage)
  }
}
