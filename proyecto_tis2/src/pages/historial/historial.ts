import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarPage } from '../search-bar/search-bar';
import {Headers, RequestOptions}  from "@angular/http";
import 'rxjs/add/operator/map';
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  publicaciones:any = [];
  id:any;
  correo:any;
  id_publicacion:any;
  data:any;

  contrasena: any;
  oficio: any;
  correo1: any;
  isUserLogged=false;
  private favorito=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    console.log(this.correo,this.contrasena);  
    if(this.correo && this.contrasena != ''){
      this.isUserLogged = true;
    }
    

    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/historialget.php/?correo='+this.correo)
    //this.http.get('https://proyectoficiosapp.000webhostapp.com/historialget.php/?correo='+this.correo)
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
    
  }


  detalle(id){
    this.navCtrl.push(DetallepublicacionPage,{valor:id, correo: this.correo});  
    
  }
    
  borrar(){
    var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
       let data2 = {
        correo: this.correo,
        };
      console.log(data2);
      this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/historialdelete.php',data2, options)
      //this.http.post('https://proyectoficiosapp.000webhostapp.com/historialdelete.php',data2, options)
        .map(res => res.json())
        .subscribe(res => {
        
       
        if(res=="Historial borrar exitoso"){
        
            console.log('borrar exitoso');
          }
        
        else
        {
        console.log('error');
          } 
        });
        
      //this.navCtrl.push(HistorialPage,{correo: this.correo1, contrasena: this.contrasena});
      //window.location.reload();
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
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
