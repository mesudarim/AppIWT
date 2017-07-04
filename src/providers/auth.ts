import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
//import { JwtHelper, AuthHttp } from 'angular2-jwt';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';

import { User } from '../models/user';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private authUser = new BehaviorSubject(null);
  public user$: Observable<User> = this.authUser.asObservable();

  constructor(public http: Http,
              private readonly storage: Storage) {

    console.log('Hello AuthProvider Provider');
  }


//   login(values: any): Observable<any> {
//   return this.http.post(this.endpoints.getLogin(), values)
//     .map(response => response.text())
//     .map(jwt => this.handleJwtResponse(jwt))
//     .catch(err => Observable.throw(this.handleErrors(err)));
// }


}
