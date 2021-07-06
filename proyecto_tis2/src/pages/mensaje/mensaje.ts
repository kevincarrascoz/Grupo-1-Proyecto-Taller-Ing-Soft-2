import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

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
  @ViewChild("mensaje") mensaje;
  id_chat: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    console.log(this.correo, this.id_publicacion);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajePage');
  }

  enviarMensaje() {

    console.log(this.mensaje.value);
    var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
       let data = {
        correo: this.correo,
        id_publicacion: this.id_publicacion,
        mensaje: this.mensaje.value
      };
    this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/ingresarChat.php',data, options)
        //this.http.post('https://proyectooficiosapp.000webhostapp.com/register.php',data, options)
        .map(res => res.json())
        .subscribe(res => {
        this.id_chat = res;
        console.log(this.id_chat);

        
        
        });

    
  }

}
