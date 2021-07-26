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
  private favorito=[];
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
  fav(id){

    var index = this.favorito.indexOf(id);
    if(index > -1){
      this.favorito.splice(index,1);
     
    }else{
      this.favorito.push(id);
    }
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
          
  
   let data3 = {
    correo: this.correo,
    id_publicacion: id,
  };
  console.log(data3);
  this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/favoritos.php',data3, options)
  //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/favoritos.php',data, options)
    .map(res => res.json())
    .subscribe(res => {

      
    
   
    if(res=="Favorito exitoso"){

    
        console.log('Favorito exitoso');
      }
    
    else
    {
    console.log('error');
      } 
    });  
    
}
delete(id){
  var index = this.favorito.indexOf(id);
  if(index > -1){
    this.favorito.splice(index,1);
  }else{
    this.favorito.push(id);
  }

  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  let options = new RequestOptions({ headers: headers });
   let data = {
    correo: this.correo,
    };
  console.log(data);
  this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/favoritosdelete.php',data, options)
  //this.http.post('https://proyectoficiosapp.000webhostapp.com/favoritosdelete.php',data, options)
    .map(res => res.json())
    .subscribe(res => {
    
   
    if(res=="Borrado exitoso"){
    
        console.log('Borrado exitoso');
      }
    
    else
    {
    console.log('error');
      } 
    });
 
} 
  buscar(){
    this.navCtrl.push(SearchBarPage);
  }
}
