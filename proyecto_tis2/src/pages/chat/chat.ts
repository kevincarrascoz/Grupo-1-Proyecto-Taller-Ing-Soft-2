import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarPage } from '../search-bar/search-bar';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import { Http} from '@angular/http';
import { MensajeFinalPage } from '../mensaje-final/mensaje-final';


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
    console.log(this.correo, this.contrasena);
    this.http.post('https://edein.cl/equipo1/API/checkMensajes.php', data5)
    //this.http.post('https://proyectoficiosapp.000webhostapp.com/checkMensajes.php', data5)
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

  irMensajes(nombre, apellido, id_publicacion, correo, id_chat){
    this.navCtrl.push(MensajeFinalPage, {correo: this.correo, nombre: nombre, apellido: apellido, id_publicacion: id_publicacion, correo_receptor: correo, id_chat: id_chat});
  }

}
