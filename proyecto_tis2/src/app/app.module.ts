import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SearchBarPage } from '../pages/search-bar/search-bar';
import { HistorialPage } from '../pages/historial/historial';
import { PublicarPage } from '../pages/publicar/publicar';
import { CategoriasPage } from '../pages/categorias/categorias';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegisterPage } from '../pages/register/register';
import { DetallepublicacionLogoutPage } from '../pages/detallepublicacion-logout/detallepublicacion-logout';
import { DetallepublicacionPage } from '../pages/detallepublicacion/detallepublicacion';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PublicacionesPage } from '../pages/publicaciones/publicaciones';
import { LogoutPage } from '../pages/logout/logout';
import { PublicarLogoutPage } from '../pages/publicar-logout/publicar-logout';
import { ProfilePage } from '../pages/profile/profile';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SearchBarPage,
    HistorialPage,
    PublicarPage,
    CategoriasPage,
    PreguntasPage,
    LoginPage,
    RegisterPage,
    DetallepublicacionPage,
    PublicacionesPage,
    LogoutPage,
    PublicarLogoutPage,
    ProfilePage,
    DetallepublicacionLogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SearchBarPage,
    HistorialPage,
    PublicarPage,
    CategoriasPage,
    PreguntasPage,
    LoginPage,
    RegisterPage,
    DetallepublicacionPage,
    PublicacionesPage,
    LogoutPage,
    PublicarLogoutPage,
    ProfilePage,
    DetallepublicacionLogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
