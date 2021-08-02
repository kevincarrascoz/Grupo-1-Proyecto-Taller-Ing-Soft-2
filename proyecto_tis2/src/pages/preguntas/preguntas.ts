import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
preguntas:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntasPage');
  }

  buscar(){
    this.navCtrl.push(SearchBarPage);
  }

}
