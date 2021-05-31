import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl ='http://localhost/xampp/otraprueba/';
@Injectable()
export class Provider {
  constructor(public http: HttpClient) {
    console.log('Hello Provider Provider');
  }

}
