import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger() {
    console.log('Logger Service!');
  }

  constructor() { }
}
