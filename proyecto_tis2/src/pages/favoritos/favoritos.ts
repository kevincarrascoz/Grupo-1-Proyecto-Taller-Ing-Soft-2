import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';
import { SearchBarPage } from '../search-bar/search-bar';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  correo: any;
  contrasena: any;
  publicaciones:any = [];
   favorito=false;
  isUserLogged= false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    if(this.correo && this.contrasena != ''){
      this.isUserLogged = true;
    }
   
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/favoritosget.php/?correo='+this.correo)
    //this.http.get('https://proyectoficiosapp.000webhostapp.com/favoritosget.php/?correo='+this.correo)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = data;
        console.log(this.publicaciones);
        this.favorito=true;
      },
      err =>{
        console.log("Nada!");
        //this.presentToast("No existen registros aun");
      }
      );
      this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/obtenerfavoritos.php/?correo='+this.correo)
      //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/obtenerfavoritos.php/?correo='+this.correo)
      .map(response => response.json())
      .subscribe(data =>
        {
          
        },
        err =>{
          console.log("Oops!");
          //this.presentToast("No existen registros aun");
        }
        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  detalle(id){
    this.navCtrl.push(DetallepublicacionPage,{valor:id, correo: this.correo});  
    
  }
 
  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
