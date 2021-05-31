import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

let apiUrl = "http://localhost/xampp/otraprueba/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient, public authService: AuthServiceProvider) {
    console.log('Hello AuthServiceProvider Provider');
  }


}
