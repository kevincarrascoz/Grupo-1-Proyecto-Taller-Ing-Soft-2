import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


/**
 * Generated class for the SearchBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html',
})
export class SearchBarPage {
  public isSearchbarOpened = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
     
  }
  onSearch(event){
    console.log(event.target.value);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBarPage'); 
    
  }
 
}
