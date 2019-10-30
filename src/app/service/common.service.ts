import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  printHello() {
    console.log('Common: Hellooooooo!!!');
  }

  constructor() {
  }
}
