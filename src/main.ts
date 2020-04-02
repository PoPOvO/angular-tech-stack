import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

console.log('是否启用生产环境', environment.production);
if (environment.production) {
  // 启用生产模式，禁用Angular的开发模式，该模式将关闭框架中的断言和其他检查。
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((e: any) => {
    console.log('Angular初始化', e);
  })
  .catch(err => console.error(err));
