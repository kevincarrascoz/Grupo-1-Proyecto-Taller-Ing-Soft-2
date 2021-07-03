import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isConstructorDeclaration } from 'typescript';
import { DetallepublicacionPage } from '../detallepublicacion/detallepublicacion';
import { SearchBarPage } from '../search-bar/search-bar';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
  publicaciones:any;
  id:any;
  correo: any;
  contrasena: any;
  oficio: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http) {
    this.correo = navParams.get('correo');
    this.contrasena = navParams.get('contrasena');
    console.log(this.correo,this.contrasena);

    this.http.get('http://localhost/xampp/Grupo-1-Proyecto-Taller-Ing-Soft-2/proyecto_tis2/publicaciones.php/')
    //this.http.get('https://proyectooficiosapp.000webhostapp.com/publicaciones.php')
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
    this.navCtrl.push(DetallepublicacionPage,{valor:id})
  }
  
  buscar(){
    this.navCtrl.push(SearchBarPage);
  }

  }
  
