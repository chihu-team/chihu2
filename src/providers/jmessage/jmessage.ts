import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JmessageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
declare var window;
declare var JPushPlugin;
@Injectable()
export class JmessageProvider {

  public headers: Headers;

  constructor(public http: Http) {
    
  }

}
