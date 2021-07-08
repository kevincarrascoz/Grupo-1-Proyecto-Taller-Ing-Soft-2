import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarPage } from '../search-bar/search-bar';

/**
 * Generated class for the PreguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preguntas',
  templateUrl: 'preguntas.html',
})
export class PreguntasPage {
preguntas:any;
pregunta:any;
respuesta:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/preguntas.php/')
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/preguntas.php/)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.preguntas = data;
        this.pregunta=data.pregunta;
        this.respuesta= data.respuesta;
        console.log(this.pregunta);
        console.log(this.respuesta);
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntasPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }

}
