import { Component, ViewChild } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { MensajePage } from '../mensaje/mensaje';
import { LoginPage } from '../login/login';
import { PublicacionesPage } from '../publicaciones/publicaciones';

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

  @ViewChild("comentario") comentario;
  publicaciones:any = [];
  comentarios: any = [];
  id=this.navParams.get('valor');
  valoraciones:any;
  estrellas_cinco:any;
  estrellas_cuatro:any;
  estrellas_tres:any;
  estrellas_dos:any;
  estrellas_uno:any;
  estrellas_suma:any;

  porcentaje_cinco:any;
  porcentaje_cuatro:any;
  porcentaje_tres:any;
  porcentaje_dos:any;
  porcentaje_uno:any;
  data:Observable<any>;
  nombre:any;
  apellido:any;
  correo_login:any;
  id_oficio1:any;
  codigo_comuna1:any;
  nombre_comuna:any;
  nombre_oficio:any;
  contrasena: any;
  correo_publicacion: any;
  public isUserLogged = false;
  public comentar = false;
  correo: any;
  private favorito=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
    this.correo=this.navParams.get('correo');
    this.contrasena = this.navParams.get('contrasena');
    console.log(this.correo,this.contrasena)
    if(this.correo && this.contrasena != ''){
      this.isUserLogged =true;
      
    }
    
    this.http.get('https://edein.cl/equipo1/API/publicacion.php/?id_publicacion='+this.id)
    //this.http.get('https://proyectoficiosapp.000webhostapp.com/publicacion.php/?id_publicacion='+this.id)
    .map(response => response.json())
    .subscribe(data =>
      {
        this.publicaciones = [data];
        console.log(data);
        this.apellido = data.apellido;
        this.nombre = data.nombre;
        this.correo_publicacion = data.correo;
        this.codigo_comuna1 = data.codigo_comuna;
        this.id_oficio1 = data.id_oficio;
        this.nombre_comuna = data.nombre_comuna;
        this.nombre_oficio = data.nombre_oficio;
        
      },
      err =>{
        console.log("Oops!");
        //this.presentToast("No existen registros aun");
      }
      );




      console.log('aqui va el id');
      console.log(this.id);
      this.http.get('https://edein.cl/equipo1/API/valorarget.php/?id_publicacion='+this.id)
      //this.http.get('https://proyectoficiosapp.000webhostapp.com/historialget.php/?correo='+this.correo)
      .map(response => response.json())
      .subscribe(data =>
        {
          this.valoraciones = data;
          this.estrellas_cinco = data.estrellas_cinco;
          this.estrellas_cuatro = data.estrellas_cuatro;
          this.estrellas_tres = data.estrellas_tres;
          this.estrellas_dos = data.estrellas_dos;
          this.estrellas_uno = data.estrellas_uno;

          

          this.estrellas_suma = parseInt(this.estrellas_tres) + parseInt(this.estrellas_uno);

          this.porcentaje_cinco = Math.trunc((parseInt(data.estrellas_cinco)/(parseInt(data.estrellas_cinco)+parseInt(data.estrellas_cuatro)+parseInt(data.estrellas_tres)+parseInt(data.estrellas_dos)+parseInt(data.estrellas_uno))*100));
          this.porcentaje_cuatro = Math.trunc((parseInt(data.estrellas_cuatro)/(parseInt(data.estrellas_cinco)+parseInt(data.estrellas_cuatro)+parseInt(data.estrellas_tres)+parseInt(data.estrellas_dos)+parseInt(data.estrellas_uno))*100));
          this.porcentaje_tres = Math.trunc((parseInt(data.estrellas_tres)/(parseInt(data.estrellas_cinco)+parseInt(data.estrellas_cuatro)+parseInt(data.estrellas_tres)+parseInt(data.estrellas_dos)+parseInt(data.estrellas_uno))*100));
          this.porcentaje_dos = Math.trunc((parseInt(data.estrellas_dos)/(parseInt(data.estrellas_cinco)+parseInt(data.estrellas_cuatro)+parseInt(data.estrellas_tres)+parseInt(data.estrellas_dos)+parseInt(data.estrellas_uno))*100));
          this.porcentaje_uno = Math.trunc((parseInt(data.estrellas_uno)/(parseInt(data.estrellas_cinco)+parseInt(data.estrellas_cuatro)+parseInt(data.estrellas_tres)+parseInt(data.estrellas_dos)+parseInt(data.estrellas_uno))*100));

          if(isNaN(this.porcentaje_cinco)==true){
            this.porcentaje_cinco=0;
          }
          if(isNaN(this.porcentaje_cuatro)==true){
            this.porcentaje_cuatro=0;
          }
          if(isNaN(this.porcentaje_tres)==true){
            this.porcentaje_tres=0;
          }
          if(isNaN(this.porcentaje_dos)==true){
            this.porcentaje_dos=0;
          }
          if(isNaN(this.porcentaje_uno)==true){
            this.porcentaje_uno=0;
          }

          
        },
        err =>{
          console.log("Nada!");
        }
        );







    
    this.http.get("https://edein.cl/equipo1/API/comentarios.php?id_publicacion="+this.id)
    //this.http.get('https://proyectoficiosapp.000webhostapp.com/publicacion.php/comentarios.php?id_publicacion="+this.id)
    .map(response => response.json())
    .subscribe(data => {
      this.comentarios = data;
      if(this.comentarios !=''){
        this.comentar = true;
        for(let i = 0; i < data; i++){
        this.comentarios.push(this.comentarios.length());
      }
      }else{
        this.comentar=false;
      }
      
      
    })
    this.http.get('https://edein.cl/equipo1/API/favoritosget.php/?correo='+this.correo)
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
    console.log('ionViewDidLoad DetallepublicacionPage');
  }
  enviarMensaje() {
    this.navCtrl.push(MensajePage, {id_publicacion: this.id, correo: this.correo, nombre: this.nombre, apellido: this.apellido, correo_publicacion: this.correo_publicacion});
  }
  IrLogin(){
    this.navCtrl.push(LoginPage)
  }
  
  valorar(nota){

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
          
  
    let data11 = {
      id_publicacion : this.id,
      correo: this.correo,
      nota ,
    };
    console.log('aca viene la data valorar');
    console.log(data11);
    this.http.post('https://edein.cl/equipo1/API/valorar.php',data11, options)
    //.map(res => res.json())
    .subscribe(res => {
    
   
    
      console.log('success');
        
      });
    
    


    console.log(nota);
  }



  Comentar(){
    if(this.comentario.value==""){
      const toast = this.toastCtrl.create({
        message: 'Ingrese algun comentario', 
        duration: 3000
      });
      toast.present();
  }  
  else{
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let data = {
      comentario: this.comentario.value,   
      correo: this.correo,
      id_publicacion: this.id
       
    };
    console.log(data);
    let loader = this.loading.create({
      content: 'Processing please wait...',
    });
    loader.present().then(() => {
      this.http.post('https://edein.cl/equipo1/API/comentar.php',data, options)
      //this.http.post('https://proyectoficiosapp.000webhostapp.com/comentar.php',data, options)
      .map(res => res.json())
      .subscribe(res => {
        loader.dismiss()
        if(res=="Comentario exitoso"){
          const toast = this.toastCtrl.create({
            message: 'Comentario Exitoso', 
            duration: 3000
          });
        toast.present();
        this.comentario.value="";

      }else
      {
        const toast = this.toastCtrl.create({
          message: 'Fallo el comentario', 
          duration: 3000
        });
        toast.present();
        } 
      });
    });


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
  this.http.post('https://edein.cl/equipo1/API/favoritos.php',data3, options)
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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < this.comentarios; i++) {
        this.comentarios.push( this.comentarios.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  IrPublicaciones(){
    this.navCtrl.push(PublicacionesPage, {correo: this.correo, contrasena: this.contrasena, id_oficio1: this.id_oficio1, codigo_comuna1: this.codigo_comuna1, id_publicacion_relacion: this.id, nombre_comuna: this.nombre_comuna, nombre_oficio: this.nombre_oficio});
  }

}