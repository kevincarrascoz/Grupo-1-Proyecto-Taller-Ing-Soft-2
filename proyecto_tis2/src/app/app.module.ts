import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SearchBarPage } from '../pages/search-bar/search-bar';
import { HistorialPage } from '../pages/historial/historial';
import { PublicarPage } from '../pages/publicar/publicar';
import { CategoriasPage } from '../pages/categorias/categorias';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { Faq1Page } from '../pages/faq1/faq1';
import { Faq2Page } from '../pages/faq2/faq2';
import { Faq3Page } from '../pages/faq3/faq3';
import { Faq4Page } from '../pages/faq4/faq4';
import { Faq5Page } from '../pages/faq5/faq5';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegisterPage } from '../pages/register/register';

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
    ContactPage,
    SearchBarPage,
    HistorialPage,
    PublicarPage,
    CategoriasPage,
    PreguntasPage,
    Faq1Page,
    Faq2Page,
    Faq3Page,
    Faq4Page,
    Faq5Page,
    AcercaDePage,
    LoginPage,
    RegisterPage,
    DetallepublicacionPage,
    PublicacionesPage,
    LogoutPage,
    PublicarLogoutPage,
    ContactPage,
    ProfilePage
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
    ContactPage,
    SearchBarPage,
    HistorialPage,
    PublicarPage,
    CategoriasPage,
    PreguntasPage,
    Faq1Page,
    Faq2Page,
    Faq3Page,
    Faq4Page,
    Faq5Page,
    AcercaDePage,
    LoginPage,
    RegisterPage,
    DetallepublicacionPage,
    PublicacionesPage,
    LogoutPage,
    PublicarLogoutPage,
    ContactPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
