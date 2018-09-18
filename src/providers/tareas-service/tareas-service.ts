import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/umd';

/*
  Generated class for the TareasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareasServiceProvider {
  url1 = "http://192.168.1.110:8082/";
  constructor(public http: HttpClient,
  ) {
    console.log('Hello TareasServiceProvider Provider');
  }


  consultatareas() {
    let data = {
      CLIMIT: "10",
    };
    console.log('1111111111111111111111111111');
    console.log(data);
    return this.http.post(this.url1 + "wsConsultaTareas ", data);
  }

}
