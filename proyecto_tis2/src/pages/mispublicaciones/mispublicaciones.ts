import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';
import 'rxjs/add/operator/map';

/**
 * Generated class for the MispublicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mispublicaciones',
  templateUrl: 'mispublicaciones.html',
})
export class MispublicacionesPage {
  correo: any;
  correo1: any;
  publicaciones: any;
  id_publicacion:any;
  data2:any;
  data3:any;
  id:any;
  isUserLogged=false;
  private favorito=[];
  contrasena: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = this.navParams.get('correo');
    if(this.correo && this.contrasena != ''){
      this.isUserLogged = true;
    }
    this.http.get("http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/mispublicaciones.php?correo="+this.correo)
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/mispublicaciones.php/)
    .map(res => res.json())
    .subscribe(data => {
      this.publicaciones = data;
      console.log(this.publicaciones);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MispublicacionesPage');
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
}
