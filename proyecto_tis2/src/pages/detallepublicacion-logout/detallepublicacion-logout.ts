import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { LoginPage } from '../login/login';
/**
 * Generated class for the DetallepublicacionLogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallepublicacion-logout',
  templateUrl: 'detallepublicacion-logout.html',
})
export class DetallepublicacionLogoutPage {

  publicaciones:any;
  userId:any;
  id=this.navParams.get('valor');
  title:any;
  content:any;
  user_id:any;
  status:any;
  data:Observable<any>;
  nombre:any;
  apellido:any;
  correo:any;
  descripcion:any;
  edad_usuario:any;
  fecha_publicacion:any;
  horario:any;
  nombre_oficio:any;
  precio:any;
  telefono:any;

   constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    console.log(this.id);
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/publicaciones.php/?id_publicacion='+this.id)
    //this.http.get('https://proyectooficiosapp.000webhostapp.com/publicaciones.php/?id_publicacion='+this.id)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = data;
        this.nombre=data.nombre;
        this.apellido=data.apellido;
        this.correo=data.correo;
        this.descripcion=data.descripcion;
        this.edad_usuario=data.edad_usuario;
        this.fecha_publicacion=data.fecha_publicacion;
        this.horario=data.horario;
        this.nombre_oficio=data.nombre_oficio;
        this.precio=data.precio;
        this.telefono=data.telefono;
        console.log(data);
        console.log(this.user_id);
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallepublicacionPage');
  }

  IrLogin(){
    this.navCtrl.push(LoginPage)
  }


}

