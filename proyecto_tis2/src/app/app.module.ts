import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchBarPage } from '../pages/search-bar/search-bar';
import { HistorialPage } from '../pages/historial/historial';
import { PublicarPage } from '../pages/publicar/publicar';
import { CategoriasPage } from '../pages/categorias/categorias';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegisterPage } from '../pages/register/register';
import { DetallepublicacionPage } from '../pages/detallepublicacion/detallepublicacion';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PublicacionesPage } from '../pages/publicaciones/publicaciones';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { MensajePage } from '../pages/mensaje/mensaje';
import { PubOficioPage } from '../pages/pub-oficio/pub-oficio';
import { MensajeFinalPage } from '../pages/mensaje-final/mensaje-final';
import { MiscertificadosPage } from '../pages/miscertificados/miscertificados';
import { MiscomentariosPage } from '../pages/miscomentarios/miscomentarios';
import { MispublicacionesPage } from '../pages/mispublicaciones/mispublicaciones';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ModificarperfilPage } from '../pages/modificarperfil/modificarperfil';


@NgModule({
  declarations: [
    MyApp,
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
    ProfilePage,
    ChatPage,
    MensajePage,
    PubOficioPage,
    MensajeFinalPage,
    MiscertificadosPage,
    MiscomentariosPage,
    MispublicacionesPage,
    FavoritosPage,
    ModificarperfilPage
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
    ProfilePage,
    ChatPage,
    MensajePage,
    PubOficioPage,
    MensajeFinalPage,
    MiscertificadosPage,
    MiscomentariosPage,
    MispublicacionesPage,
    FavoritosPage,
    ModificarperfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
