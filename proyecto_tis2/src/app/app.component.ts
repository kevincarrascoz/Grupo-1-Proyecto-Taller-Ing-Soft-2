import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistorialPage } from '../pages/historial/historial';
import { PublicarPage } from '../pages/publicar/publicar';
import { CategoriasPage } from '../pages/categorias/categorias';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { LoginPage } from '../pages/login/login';
import { PublicacionesPage } from '../pages/publicaciones/publicaciones';

import { Events } from 'ionic-angular';
import { LogoutPage } from '../pages/logout/logout';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any=HomePage;
  pages: Array<{title: string, component: any}>;
  navCtrl: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Catalogo', component: PublicacionesPage },
      { title: 'Historial', component: HistorialPage },
      { title: 'Publicar', component: PublicarPage },
      { title: 'Categorias', component: CategoriasPage },
      { title: 'Preguntas Frecuentes', component: PreguntasPage }
    ];
    events.subscribe('user:loggedin',()=>{
      this.pages = [
                    { title: 'Inicio', component: HomePage },
                    { title: 'Catalogo', component: PublicacionesPage },
                    { title: 'Historial', component: HistorialPage },
                    { title: 'Publicar', component: PublicarPage },
                    { title: 'Categorias', component: CategoriasPage },
                    { title: 'Preguntas Frecuentes', component: PreguntasPage },
                    { title:'Logout', component: LogoutPage}
                    ];
    });

      events.subscribe('user:loggedout',()=>{
      this.pages = [
                    { title: 'Inicio', component: HomePage },
                    { title: 'Catalogo', component: PublicacionesPage },
                    { title: 'Historial', component: HistorialPage },
                    { title: 'Publicar', component: PublicarPage },
                    { title: 'Categorias', component: CategoriasPage },
                    { title: 'Preguntas Frecuentes', component: PreguntasPage }
                    ];
    });
  
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
 
  IrLogin(){
    this.nav.push(LoginPage);
  }
}
