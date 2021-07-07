import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarPage } from '../search-bar/search-bar';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import { Http, RequestOptions, Headers } from '@angular/http';
import { MensajePage } from '../mensaje/mensaje';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  correo: any;
  contrasena: any;
  public tieneMensajes = false;
  mensajes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    let data5 = {
      correo: this.correo
    };
    this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/checkMensajes.php', data5)
    //this.http.get('https://proyectooficiosapp.000webhostapp.com/publicaciones.php/?id_publicacion='+this.id)
    .map(res => res.json())
    .subscribe(data3 =>
      {

        if(data3 != false){
          this.mensajes = data3;
          console.log(this.mensajes);
          this.tieneMensajes =true;
        }else{
          this.tieneMensajes = false;
        }



      });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  buscar(){
    this.navCtrl.push(SearchBarPage);
  }

  irPublicaciones(){
    this.navCtrl.push(PublicacionesPage, {correo: this.correo, contrasena: this.contrasena});
  }

  irMensajes(nombre, apellido, id_publicacion, correo_publicacion, id_chat){
    this.navCtrl.push(MensajePage, {correo: this.correo, nombre: nombre, apellido: apellido, id_publicacion: id_publicacion, correo_piblicacion: correo_publicacion, id_chat: id_chat});
  }

}
