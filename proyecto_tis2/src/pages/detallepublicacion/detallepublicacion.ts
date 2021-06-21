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
  title:any;
  content:any;
  user_id:any;
  status:any;
  data:Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.http.get('http://localhost/xampp/otraprueba/post.php/?id='+this.id)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = data;
        this.title=data.title;
        this.content=data.content;
        this.user_id=data.user_id;
        this.status=data.status;
        console.log(data);
        console.log(this.user_id);
        
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

  /* resena(id){
    this.navCtrl.push(DetallepublicacionPage,{valor:id})
  } */


}
