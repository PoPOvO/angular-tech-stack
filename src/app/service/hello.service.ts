import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  baseUrl = '/api/hello';

  helloUrl = this.baseUrl + '';

  hello() {
    return this.http.get(this.helloUrl, {
      observe: 'response'
    });
  }

  constructor(
    private http: HttpClient
  ) { }
}
