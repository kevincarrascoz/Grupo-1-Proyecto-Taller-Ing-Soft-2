import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Headers, RequestOptions}  from "@angular/http";
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';
import 'rxjs/add/operator/map';
import { SearchBarPage } from '../search-bar/search-bar';

/**
 * Generated class for the PubOficioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pub-oficio',
  templateUrl: 'pub-oficio.html',
})
export class PubOficioPage {
  id_oficio = this.navParams.get('valor');
  publicaciones: any = [];
  data2:any;
  correo:any;
  contrasena: any;
  correo1: any;
  public publicaciones_empty = false;
  private favorito=[];
  isUserLogged= false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    console.log(this.correo,this.contrasena);
    if(this.correo && this.contrasena != ''){
      this.isUserLogged = true;
    }
    this.http.get("http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/pub_oficio.php?id_oficio="+this.id_oficio)
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/pub_oficio.php?id_oficio="+this.id_oficio)
    .map(response => response.json())
    .subscribe(data => {
      this.publicaciones = data;
        console.log(this.publicaciones);
        if(this.publicaciones.length === 0){
          this.publicaciones_empty = true;
        }
      for (let i = 0; i < data; i++) {
      this.publicaciones.push( this.publicaciones.length );
      }
    }, err => {
      console.log("Oops!");
    });
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
    console.log('ionViewDidLoad PubOficioPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < this.publicaciones; i++) {
        this.publicaciones.push( this.publicaciones.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  detalle(id){
    if(this.correo1==this.correo){
      this.navCtrl.push(DetallepublicacionPage,{valor:id});
    }else{
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
       let data2 = {
        correo: this.correo,
        id_publicacion: id,
      };
      console.log(data2);
      this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/historial.php',data2, options)
      //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/historial.php',data2, options)
        .map(res => res.json())
        .subscribe(res => {
        
       
        if(res=="Historial exitoso"){
        
            console.log('registro exitoso');
          }
        
        else
        {
        console.log('error');
          } 
        });
        
      this.navCtrl.push(DetallepublicacionPage,{valor:id, correo: this.correo});
    }
    
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
