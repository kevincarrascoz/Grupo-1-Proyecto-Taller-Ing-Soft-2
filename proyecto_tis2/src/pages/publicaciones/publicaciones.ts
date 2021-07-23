import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Headers, RequestOptions}  from "@angular/http";
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';
import { SearchBarPage } from '../search-bar/search-bar';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
  publicaciones:any = [];
  id:any;
  correo:any;
  id_publicacion:any;
  data2:any;
  data3:any;
  data4:any;
  //id_publicacion: any;
  favorito=false;
  contrasena: any;
  oficio: any;
  correo1: any;
  isUserLogged = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    console.log(this.correo,this.contrasena);
    if(this.correo && this.contrasena != ''){
      this.isUserLogged = true;
    }
    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/publicaciones.php/')
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/publicaciones.php/)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = data;
        console.log(this.publicaciones);

        for (let i = 0; i < data; i++) {
        this.publicaciones.push( this.publicaciones.length );
      }
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionesPage');
  }
  detalle(id){
    this.visitas(id);

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


  visitas(id){
    console.log("entre visitas");
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    let data3 = {
      id_publicacion: id,
    };
    console.log(data3);
    this.http.post('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/visitas.php',data3, options)
    //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/visitas.php',data3, options)
    //.map(res => res.json())
    .subscribe(res => {
    
   
    
    console.log('success');
      
    });
    this.navCtrl.setRoot(this.navCtrl.getActive().component, {valor:id, correo: this.correo}); 

  }

  fav(id){
        
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
  
