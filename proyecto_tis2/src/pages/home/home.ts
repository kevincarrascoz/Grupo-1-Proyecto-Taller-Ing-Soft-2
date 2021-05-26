import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  publicaciones:any;
  id:any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = data;

        console.log(data);
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );

  }

  detalle(id){
    this.navCtrl.push(DetallepublicacionPage,{valor:id})
  }


  ionViewDidLoad(){
    console.log('Ya cargo ListadoPage');
  }

}
