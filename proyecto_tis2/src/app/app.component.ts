import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchBarPage } from '../pages/search-bar/search-bar';
import { HistorialPage } from '../pages/historial/historial';
import { PublicarPage } from '../pages/publicar/publicar';
import { CategoriasPage } from '../pages/categorias/categorias';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Buscar', component: SearchBarPage },
      { title: 'Historial', component: HistorialPage },
      { title: 'Publicar', component: PublicarPage },
      { title: 'Categorias', component: CategoriasPage },
      { title: 'Preguntas Frecuentes', component: PreguntasPage },
      { title: 'Acerca de', component: AcercaDePage }
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.nav.setRoot(TabsPage)
  }

}
