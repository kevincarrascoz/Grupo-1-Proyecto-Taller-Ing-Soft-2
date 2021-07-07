import { Component, ViewChild } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { MensajePage } from '../mensaje/mensaje';
import { LoginPage } from '../login/login';

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
  publicaciones:any = [];
  comentarios: any = [];
  id=this.navParams.get('valor');
  data:Observable<any>;
  nombre:any;
  apellido:any;
  correo_login:any;
  contrasena: any;
  correo_publicacion: any;
  public isUserLogged = false;
  public comentar = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
    this.correo_login=this.navParams.get('correo');
    this.contrasena = this.navParams.get('contrasena');
    if(this.correo_login && this.contrasena != ''){
      this.isUserLogged =true;
      
    }
    
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/publicacion.php/?id_publicacion='+this.id)
    //this.http.get('https://proyectooficiosapp.000webhostapp.com/publicaciones.php/?id_publicacion='+this.id)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = [data];
        console.log(data);
        this.apellido = data.apellido;
        this.nombre = data.nombre;
        this.correo_publicacion = data.correo;
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );
    
    this.http.get("http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/comentarios.php?id_publicacion="+this.id)
    .map(response => response.json())
    .subscribe(data => {
      this.comentarios = data;
      if(this.comentarios !=''){
        this.comentar = true;
        for(let i = 0; i < data; i++){
        this.comentarios.push(this.comentarios.length());
      }
      }else{
        this.comentar=false;
      }
      
      
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallepublicacionPage');
  }
  enviarMensaje() {
    this.navCtrl.push(MensajePage, {id_publicacion: this.id, correo: this.correo_login, nombre: this.nombre, apellido: this.apellido, correo_publicacion: this.correo_publicacion});
  }
  IrLogin(){
    this.navCtrl.push(LoginPage)
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
      correo: this.correo_login,
      id_publicacion: this.id
       
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
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < this.comentarios; i++) {
        this.comentarios.push( this.comentarios.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}