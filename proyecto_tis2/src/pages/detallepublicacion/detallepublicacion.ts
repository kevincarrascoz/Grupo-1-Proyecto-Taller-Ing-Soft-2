import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

/**
 * Generated class for the DetallepublicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallepublicacion',
  templateUrl: 'detallepublicacion.html',
})
export class DetallepublicacionPage {
  publicaciones:any;
  userId:any;
  id=this.navParams.get('valor');
  data:Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
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
    console.log('ionViewDidLoad DetallepublicacionPage');
  }

}
