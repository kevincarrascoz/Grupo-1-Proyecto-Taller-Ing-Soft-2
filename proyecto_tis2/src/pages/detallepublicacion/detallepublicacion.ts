import { Component, ViewChild } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { MensajePage } from '../mensaje/mensaje';

/**
 * Generated class for the DetallepublicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallepublicacion',
  templateUrl: 'detallepublicacion.html',
})
export class DetallepublicacionPage {

  @ViewChild("comentario") comentario;
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
  correo_login=this.navParams.get('correo');
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
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
  enviarMensaje() {
    this.navCtrl.push(MensajePage, {id_publicacion: this.id, correo: this.correo_login, nombre: this.nombre, apellido: this.apellido});
  }

  Comentar(){
    if(this.comentario.value==""){
      const toast = this.toastCtrl.create({
        message: 'Ingrese algun comentario', 
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
      comentario: this.comentario.value,   
      correo: this.correo
       
    };
    console.log(data);
    let loader = this.loading.create({
      content: 'Processing please wait...',
    });
    loader.present().then(() => {
      this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/comentar.php',data, options)
      //this.http.post('https://proyectooficiosapp.000webhostapp.com/comentarios.php',data, options)
      .map(res => res.json())
      .subscribe(res => {
        loader.dismiss()
        if(res=="Comentario exitoso"){
          const toast = this.toastCtrl.create({
            message: 'Comentario Exitoso', 
            duration: 3000
          });
        toast.present();
        this.comentario.value="";

      }else
      {
        const toast = this.toastCtrl.create({
          message: 'Fallo el comentario', 
          duration: 3000
        });
        toast.present();
        } 
      });
    });



  }
  }


}