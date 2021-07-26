import { Component, ViewChild } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ModificarperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificarperfil',
  templateUrl: 'modificarperfil.html',
})
export class ModificarperfilPage {
  @ViewChild("telefono_nuevo") telefono_nuevo;
  @ViewChild("direccion_nuevo") direccion_nuevo;
  @ViewChild("nombre_nuevo") nombre_nuevo;
  @ViewChild("apellido_nuevo") apellido_nuevo;
  correo: any;
  perfil: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
    this.correo = navParams.get('correo');
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/perfil.php/?correo='+this.correo)
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/perfil.php/?correo='+this.correo)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.perfil = [data];
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarperfilPage');
  }

  guardar_cambios(){
    if(this.nombre_nuevo.value == '' && this.apellido_nuevo.value == '' && this.direccion_nuevo.value == '' && this.telefono_nuevo.value == ''){
      const toast = this.toastCtrl.create({
        message: 'Modifique algún dato', 
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
          correo: this.correo,
          telefono_nuevo: this.telefono_nuevo.value,
          direccion_nuevo: this.direccion_nuevo.value,
          nombre_nuevo: this.nombre_nuevo.value,
          apellido_nuevo: this.apellido_nuevo.value
        };
        let loader = this.loading.create({
          content: 'Processing please wait...',
        });
        loader.present().then(() => {
          this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/guardar_cambios_perfil.php',data, options)
          //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/publicar.php',data, options)
          .map(res => res.json())
          .subscribe(res => {
            loader.dismiss()
            if(res=="Changes successfull"){
              const toast = this.toastCtrl.create({
                message: 'Guardado con Exito', 
                duration: 3000
              });
            toast.present();
            this.navCtrl.pop();
          }else
          {
            const toast = this.toastCtrl.create({
              message: 'Fallo en Guardar', 
              duration: 3000
            });
            toast.present();
            } 
          });
        });
    }
  }
}
