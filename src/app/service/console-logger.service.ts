import {Injectable, InjectionToken, Injector} from '@angular/core';
import {CommonLogger} from './common-interface';
import {FILE_LOGGER, FileLoggerService} from './file-logger.service';

export const CONSOLE_LOGGER = new InjectionToken<CommonLogger>('console logger', {
  providedIn: 'root',
  factory: () => new ConsoleLoggerService()
});
@Injectable({
  providedIn: 'root'
})
export class ConsoleLoggerService implements CommonLogger {

  constructor() {
    console.log('控制台日志服务');
  }

  get(): string {
    return '';
  }

  print(): void {
  }

  set(log: string): void {
  }
}
