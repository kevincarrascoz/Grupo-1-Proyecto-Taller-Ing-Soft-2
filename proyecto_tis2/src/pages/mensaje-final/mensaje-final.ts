import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the MensajeFinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensaje-final',
  templateUrl: 'mensaje-final.html',
})
export class MensajeFinalPage {
@ViewChild("mensaje") mensaje;
id_publicacion: any;
correo: any;
nombre: any;
apellido: any;
correo_receptor: any;
id_chat: any;
mensajes: any;
public isMensajeEnviado = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
  this.id_publicacion=this.navParams.get('id_publicacion');
  this.correo=this.navParams.get('correo');
  this.nombre=this.navParams.get('nombre');
  this.apellido=this.navParams.get('apellido');
  this.correo_receptor=this.navParams.get('correo_receptor');
  this.id_chat=this.navParams.get('id_chat');
  let data5 = {
    id_chat: this.id_chat
  };
  console.log(this.id_publicacion, this.correo, this.nombre, this.apellido, this.correo_receptor, this.id_chat);
  this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/allMensajes.php', data5)
  //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/allMensajes.php', data5)
  .map(res => res.json())
  .subscribe(data3 =>
    {

      if(data3 != false){
        this.mensajes = data3;
        console.log(data3);
        this.isMensajeEnviado =true;
      }else{
        this.isMensajeEnviado = false;
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajeFinalPage');
  }
  enviarMensaje() {
    console.log(this.mensaje.value);
    if(this.mensaje.value==""){
      const toast = this.toastCtrl.create({
        message: 'Ingrese algun mensaje', 
        duration: 3000
      });
      toast.present();
  }else{
    var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
      let data = {
        correo: this.correo,
        mensaje: this.mensaje.value,
        id_chat: this.id_chat
      };
      console.log(data);
      console.log('si hay registros');
      this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/ingresarMensajeChat.php',data, options)
    //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/ingresarMensajeChat.php',data, options)
    .map(res => res.json())
    .subscribe(res => {
      if(res=="Mensaje successfull"){
          console.log('mensaje ingresado correctamente');
      }else{
        console.log('error');
      }

    
    });
    this.reloadPage();
   }
  }
  reloadPage(){
    this.navCtrl.pop().then(() =>{

      this.navCtrl.push(MensajeFinalPage, 
        {id_publicacion: this.id_publicacion, correo: this.correo, nombre: this.nombre, apellido: this.apellido, correo_receptor: this.correo_receptor, id_chat: this.id_chat});       
   
   });
  }
  

}
