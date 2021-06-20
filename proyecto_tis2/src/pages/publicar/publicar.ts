import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { SearchBarPage } from '../search-bar/search-bar';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
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
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });

      let data = {
        descripcion: this.descripcion.value,
        horario: this.horario.value,
        precio: this.precio.value,
        categoria: this.categoria.value,
        certificado: this.certificado.value,        
      };
      console.log(data);
      let loader = this.loading.create({
        content: 'Processing please wait...',
      });
      /*
      loader.present().then(() => {
        this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/publicar.php',data, options)
        .map(res => res.json())
        .subscribe(res => {
          loader.dismiss()
          if(res=="Public successfull"){
            const toast = this.toastCtrl.create({
              message: 'Publicacion Exitosa', 
              duration: 3000
            });
          toast.present();
        }else
        {
          const toast = this.toastCtrl.create({
            message: 'Fallo en publicacion', 
            duration: 3000
          });
          toast.present();
          } 
        });
      });
*/

  

    }
  }


  ionViewDidLoad() {
   // console.log('ionViewDidLoad PublicarPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
