import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';


@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
  publicaciones:any;
  id:any;
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http) {
    this.http.get('http://localhost/xampp/otraprueba/post.php')
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionesPage');
  }
  detalle(id){
    this.navCtrl.push(DetallepublicacionPage,{valor:id})
  }

}
