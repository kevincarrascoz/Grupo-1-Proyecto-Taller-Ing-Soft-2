import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Generated class for the PublicarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicar',
  templateUrl: 'publicar.html',
})
export class PublicarPage {
  @ViewChild("descripcion") descripcion;
  @ViewChild("horario") horario;
  @ViewChild("precio") precio;
  @ViewChild("categoria") categoria;
  @ViewChild("certificado") certificado;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  Publicar(){
    if(this.descripcion==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese una descripcion', 
          duration: 3000
        });
        toast.present();
    }else if(this.horario==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el horario', 
          duration: 3000
        });
        toast.present();
    }else if(this.precio==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese el precio', 
          duration: 3000
        });
        toast.present();
    }else if(this.categoria==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese la categoria', 
          duration: 3000
        });
        toast.present();
    }else if(this.certificado==""){
        const toast = this.toastCtrl.create({
          message: 'Ingrese un certificado', 
          duration: 3000
        });
        toast.present();
    }   
    else{

    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarPage');
  }

}
