import {Injectable, InjectionToken} from '@angular/core';
import {CommonLogger} from './common-interface';

export const FILE_LOGGER = new InjectionToken<CommonLogger>('file logger', {
  providedIn: 'root',
  factory: () => new FileLoggerService()
});
@Injectable({
  providedIn: 'root'
})
export class FileLoggerService implements CommonLogger {

  constructor() {
    console.log('文件日志服务');
  }

  get(): string {
    return '';
  }

  print(): void {
  }

  set(log: string): void {
  }
}
