import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {HelloService} from './service/hello.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('r', {static: false})
  r: RouterOutlet;

  fun = () => {
    console.log("fun");
  };

  constructor(
    private http: HttpClient,
  ) {
    const obj = {
      prop: "属性",
      fun: this.fun
    };

    console.log("Obj", obj);

    for (const k in obj) {
      console.log("A", k, obj[k]);
    }

    console.log(environment.desc, environment.apiUrl);
    // 测试跨域消息访问
    // const local = window.open('http://localhost:8080');
    // const message = {
    //   method: 'set',
    //   key: 'first',
    //   value: '一些数值'
    // };
    // local.postMessage(message, 'http://localhost:8080');

    // this.http.get('http://localhost:8080/hello/y').subscribe((r) => {
    //   console.log('响应：', r);
    // });
    this.http.jsonp('http://localhost:8080/api/hello/jsonp', 'callback').subscribe(
      data => {
        console.log('JSONP调用成功', data);
      },
      e => {
        console.log('JSONP调用错误', e);
      }
    );

    this.http.get('http://localhost:8080/api/hello').subscribe(
      res => {
        console.log('成功CORS', res);
      },
      err => {
        console.log('失败CORS', err);
      }
    );
  }

  isCollapsed = false;

  ngOnInit(): void {
  }

  test(r: RouterOutlet) {
    console.log('测试1', r);
  }

  ngAfterViewInit(): void {
    console.log('路由出口对象', this.r);
  }
}
