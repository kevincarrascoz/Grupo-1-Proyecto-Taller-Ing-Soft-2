import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { PublicacionesPage } from '../publicaciones/publicaciones';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, events:Events, public toastCtrl: ToastController) {
    events.publish('user:loggedout');
    const toast = this.toastCtrl.create({
      message: 'Sesión cerrada correctamente', 
      duration: 3000
    });
    toast.present();
    navCtrl.setRoot(PublicacionesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
