import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.correo, this.id_publicacion);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajePage');
  }

  enviarMensaje() {

    
  }

}
