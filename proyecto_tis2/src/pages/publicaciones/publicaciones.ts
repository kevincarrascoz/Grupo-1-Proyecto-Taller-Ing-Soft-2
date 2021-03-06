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
  id_publicacion_relacion:any;
  nombre_oficio: any;
  nombre_comuna: any;
  data2:any;
  data3:any;
  data4:any;

  contrasena: any;
  id_oficio1: any;
  codigo_comuna1: any;
  oficio: any;
  correo1: any;
  isUserLogged = false;
  Relacionado = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    this.id_oficio1 = navParams.get('id_oficio1');
    this.codigo_comuna1 = navParams.get('codigo_comuna1');
    this.id_publicacion_relacion = navParams.get('id_publicacion_relacion');
    this.nombre_comuna = navParams.get('nombre_comuna');
    this.nombre_oficio = navParams.get('nombre_oficio');
    console.log(this.correo,this.contrasena, this.id_oficio1, this.codigo_comuna1, this.id_publicacion_relacion);
    if(this.correo && this.contrasena != ''){
      this.isUserLogged = true;
      
    }
      if(this.id_oficio1 && this.codigo_comuna1 && this.id_publicacion_relacion!= ''){
        console.log("se aplico el filtro");
        let data7 = {
          id_oficio1: this.id_oficio1,
          codigo_comuna1: this.codigo_comuna1,
          id_publicacion_relacion: this.id_publicacion_relacion
        };
        console.log(data7);
        this.http.post('https://edein.cl/equipo1/API/publicacionesRelacionadas.php', data7)
        .map(response => response.json())
        .subscribe(data =>
        {
          if(data==false){
            console.log("no hay publicaciones relacionadas");
            this.Relacionado = false;
          }
        console.log(data);
        this.publicaciones = data;
        console.log(this.publicaciones);

        for (let i = 0; i < data; i++) {
        this.publicaciones.push( this.publicaciones.length );
        }
        
        }
        );
        }else{
        console.log("no se aplico el filtro")
        this.http.get('https://edein.cl/equipo1/API/publicaciones.php/')
    //this.http.get('https://https://proyectoficiosapp.000webhostapp.com/publicaciones.php/)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = data;
        console.log(this.publicaciones);
        if(data==false){
          console.log("no hay publicaciones relacionadas");
          this.Relacionado = false;
        }

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
  detalle(id, visitas){
    this.visitas(id, visitas);

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
      this.http.post('https://edein.cl/equipo1/API/historial.php',data2, options)
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


  visitas(id, visitas){
    console.log("entre visitas");
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    let data3 = {
      id_publicacion: id,
      visitas: visitas
    };
    console.log(data3);
    this.http.post('https://edein.cl/equipo1/API/visitas.php',data3, options)
    //this.http.post('https://https://proyectoficiosapp.000webhostapp.com/visitas.php',data3, options)
    //.map(res => res.json())
    .subscribe(res => {
    
   
    
    console.log('success');
      
    });
    this.navCtrl.setRoot(this.navCtrl.getActive().component, {valor:id, correo: this.correo}); 

  }

  
  buscar(){
    this.navCtrl.push(SearchBarPage);
  }

  }
  
