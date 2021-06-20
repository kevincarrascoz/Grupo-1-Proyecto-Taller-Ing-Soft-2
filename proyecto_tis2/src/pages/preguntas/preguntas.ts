import { Component } from '@angular/core';
import { IonicPage, Item, NavController, NavParams } from 'ionic-angular';
import { Faq1Page } from '../faq1/faq1';
import { Faq2Page } from '../faq2/faq2';
import { Faq3Page } from '../faq3/faq3';
import { Faq4Page } from '../faq4/faq4';
import { Faq5Page } from '../faq5/faq5';
import { SearchBarPage } from '../search-bar/search-bar';

/**
 * Generated class for the PreguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preguntas',
  templateUrl: 'preguntas.html',
})
export class PreguntasPage {

  items = [
    '¿Cómo elegir a un experto?',
    '¿Cómo publicar un servicio?',
    '¿Cómo contactarse con un experto?',
    '¿Como registrarme?',
    '¿Como cambiar mis datos personales?'

  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    if(item=="¿Cómo elegir a un experto?"){
      this.navCtrl.push(Faq1Page);
    }
    if(item=="¿Cómo publicar un servicio?"){
      this.navCtrl.push(Faq2Page);
    }
    if(item=="¿Cómo contactarse con un experto?"){
      this.navCtrl.push(Faq3Page);
    }
    if(item=="¿Como registrarme?"){
      this.navCtrl.push(Faq4Page);
    }
    if(item=="¿Como cambiar mis datos personales?"){
      this.navCtrl.push(Faq5Page);
    }
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntasPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }

}
