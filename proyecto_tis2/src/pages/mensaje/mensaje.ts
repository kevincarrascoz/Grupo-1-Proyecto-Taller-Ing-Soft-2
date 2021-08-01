import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
/**
 * Generated class for the MensajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensaje',
  templateUrl: 'mensaje.html',
})
export class MensajePage {
  id_publicacion=this.navParams.get('id_publicacion');
  correo=this.navParams.get('correo');
  nombre=this.navParams.get('nombre');
  apellido=this.navParams.get('apellido');
  correo_publicacion=this.navParams.get('correo_publicacion');
  @ViewChild("mensaje") mensaje;
  id_chat: any;
  content:any;
  mensajes: any;
  public isUserLogged = false;
  public isMensajeEnviado = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  public toastCtrl: ToastController) {
    console.log(this.correo, this.id_publicacion);
    if(this.correo !=undefined){
    this.isUserLogged = true;
    let data5 = {
      correo: this.correo,
      id_publicacion: this.id_publicacion
    };
    this.http.post('https://edein.cl/equipo1/API/obtenerMensajes.php', data5)
    //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/obtenerMensajes.php', data5)
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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajePage');
  }

  IrLogin(){
    this.navCtrl.push(LoginPage)
  }
  IrRegistro(){
    this.navCtrl.push(RegisterPage)
  }

  enviarMensaje() {

    console.log(this.mensaje.value);
    if(this.mensaje.value==""){
      const toast = this.toastCtrl.create({
        message: 'Ingrese algún mensaje', 
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
        id_publicacion: this.id_publicacion,
        mensaje: this.mensaje.value,
        correo_publicacion: this.correo_publicacion
      };


    this.http.post('https://edein.cl/equipo1/API/validateIngresarChat.php', data)
    //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/validateIngresarChat.php', data)
    .map(res => res.json())
    .subscribe(data2 =>
      {
        console.log(data2);
        this.id_chat = data2.id_chat;
        console.log(this.id_chat);
        console.log(data);
        if(data2==false){
          console.log('no hay registros');
          this.http.post('https://edein.cl/equipo1/API/ingresarChat.php',data, options)
        //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/ingresarChat.php',data, options)
        .map(res => res.json())
        .subscribe(res => {
        this.content = res;
        console.log(this.content);

        
        
        });


        }else{
          let data = {
            correo: this.correo,
            mensaje: this.mensaje.value,
            id_chat: this.id_chat
          };
          console.log(data);
          console.log('si hay registros');
          this.http.post('https://edein.cl/equipo1/API/ingresarMensajeChat.php',data, options)
        //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/ingresarMensajeChat.php',data, options)
        .map(res => res.json())
        .subscribe(res => {
          if(res=="Mensaje successfull"){
              console.log('Mensaje ingresado correctamente');
          }else{
            console.log('error');
          }

        
        });


        }

      },
      err =>{
        console.log("opps");
        //this.presentToast("No existen registros aun");
      }
      
      ); 
      this.reloadPage();
     } 
    }
 
  reloadPage(){
    this.navCtrl.pop().then(() =>{

      this.navCtrl.push(MensajePage, 
        {id_publicacion: this.id_publicacion, correo: this.correo, nombre: this.nombre, apellido: this.apellido, correo_publicacion: this.correo_publicacion});       
   
   });
  }

}








