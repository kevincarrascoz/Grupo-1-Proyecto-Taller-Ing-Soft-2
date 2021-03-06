import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HistorialPage } from '../pages/historial/historial';
import { PublicarPage } from '../pages/publicar/publicar';
import { CategoriasPage } from '../pages/categorias/categorias';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { LoginPage } from '../pages/login/login';
import { PublicacionesPage } from '../pages/publicaciones/publicaciones';

import { Events } from 'ionic-angular';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { FavoritosPage } from '../pages/favoritos/favoritos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any=PublicacionesPage;
  pages: Array<{title: string, component: any, icon: string}>;
  navCtrl: any;
  correo1: any;
  contrasena1: any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Iniciar Sesión', component: LoginPage, icon:'log-in' },
      { title: 'Catálogo', component: PublicacionesPage, icon:'pricetags'  },
      { title: 'Categorías', component: CategoriasPage, icon:'list-box'  },
      { title: 'Publicar', component: PublicarPage, icon:'briefcase'  },
      { title: 'Preguntas Frecuentes', component: PreguntasPage, icon:'information-circle'  }
    ];
    events.subscribe('user:loggedin',(correo, contrasena, time)=>{
      console.log('Welcome', correo, contrasena, 'at', time);
      this.pages = [
                    { title: 'Mi perfil', component: ProfilePage, icon:'contact'  },
                    { title: 'Catálogo', component: PublicacionesPage, icon:'pricetags'  },
                    { title: 'Historial', component: HistorialPage, icon:'time'  },
                    { title: 'Favoritos', component: FavoritosPage, icon:'star-outline'  },
                    { title: 'Publicar', component: PublicarPage, icon:'briefcase'  },
                    { title: 'Mensajes', component: ChatPage, icon:'chatbubbles'  },
                    { title: 'Categorías', component: CategoriasPage, icon:'list-box'  },
                    { title: 'Preguntas Frecuentes', component: PreguntasPage, icon:'information-circle'  },
                    { title:'Logout', component: LogoutPage, icon:'log-out' },
                    ];
                    this.correo1 = correo.correo;
                    this.contrasena1 = correo.contrasena;
    });

      events.subscribe('user:loggedout',()=>{
      this.pages = [
                    { title: 'Iniciar Sesión', component: LoginPage, icon:'log-in' },
                    { title: 'Catálogo', component: PublicacionesPage, icon:'pricetags'  },
                    { title: 'Categorías', component: CategoriasPage, icon:'list-box'  },
                    { title: 'Publicar', component: PublicarPage, icon:'briefcase'  },
                    { title: 'Preguntas Frecuentes', component: PreguntasPage, icon:'information-circle'  }
                    ];
                    this.correo1 = undefined;
                    this.contrasena1 = undefined;
    });
  
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(this.correo1);
    console.log(this.contrasena1);
    if(this.correo1==undefined){
      this.nav.setRoot(page.component);
    }else{
      this.nav.setRoot(page.component, {correo: this.correo1, contrasena: this.contrasena1});
    }
  }
 
  IrLogin(){
    this.nav.push(LoginPage);
  }
}
