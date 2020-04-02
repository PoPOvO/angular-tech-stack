import { Component, OnInit } from '@angular/core';
import {NzFormatEmitEvent} from 'ng-zorro-antd';
import {HelloService} from '../../service/hello.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import * as fileSaver from 'file-saver';
import {saveOutputToFile} from 'source-map-explorer/dist/output';

/**
 * 可编辑table，响应式表单方式
 */
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  exportLoading1 = false;

  exportLoading2 = false;

  exportLoading3 = false;

  defaultCheckedKeys = ['0-1-0-0'];

  nodes2 = [
    {
      children: [
        {
          checked: false,
          children: [],
          expanded: false,
          isLeaf: false,
          key: 11,
          title: "节点1-1"
        },
        {
          checked: true,
          children: [],
          expanded: false,
          isLeaf: false,
          key: 12,
          title: "节点1-2"
        }
      ],
      expanded: false,
      isLeaf: false,
      key: 1,
      title: "节点1"
    },
    {
      checked: true,
      children: [
        {
          checked: true,
          children: [],
          expanded: false,
          isLeaf: false,
          key: 21,
          title: "节点2-1"
        },
        {
          checked: true,
          children: [],
          expanded: false,
          isLeaf: false,
          key: 22,
          title: "节点2-2"
        }
      ],
      expanded: false,
      isLeaf: false,
      key: 1,
      title: "节点1"
    }
  ];

  nodes1 = [
    {
      title: '0-0',
      key: '0-0',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true},
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true, checked: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true, checked: true }
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];

  nodes = [
    {
      title: '0-0',
      key: '0-0',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  ngOnInit(): void {
    this.helloService.hello().subscribe((res: any) => {
      console.log('测试通信', res);
    });
  }

  // 使用file-save库，浏览器都支持
  fileDownLoad1() {
    const url = '/api/file/download';
    this.exportLoading1 = true;
    this.http.get(url, {
      observe: 'response',
      responseType: 'arraybuffer'
    }).subscribe(
      (res: any) => {
        let fileName = res.headers.get('Content-Disposition').match(/filename=([^;]+)/);
        const contentType = res.headers.get('Content-Type');
        fileName = fileName && fileName.length > 0 ? fileName[1] : null;
        fileName = fileName ? decodeURI(escape(fileName)) : null; // 先ISO-8859-1编码，再utf8解码
        const blob = new Blob([res.body], { type : contentType ? contentType : 'application/octet-stream' });
        fileSaver.saveAs(blob, fileName ? fileName : 'download');
        this.exportLoading1 = false;
      },
      e => {
        console.log('错误', e);
        this.exportLoading1 = false;
      }
    );
    // const url = '/api/file/download';
    // this.exportLoading1 = true;
    // this.http.get(url, {
    //   observe: 'response',
    //   responseType: 'blob'
    // }).subscribe(
    //   (res: any) => {
    //     let fileName = res.headers.get('Content-Disposition').match(/filename=([^;]+)/);
    //     fileName = fileName && fileName.length > 0 ? fileName[1] : null;
    //     fileName = fileName ? decodeURI(escape(fileName)) : null; // 先ISO-8859-1编码，再utf8解码
    //     fileSaver.saveAs(res.body, fileName);
    //     this.exportLoading1 = false;
    //   },
    //   e => {
    //     console.log('错误', e);
    //     this.exportLoading1 = false;
    //   }
    // );
  }

  // firefox正常；webkit内核浏览器（Chrome，360）未能识别到filename
  fileDownLoad2() {
    const url = '/api/file/download';
    this.exportLoading2 = true;
    this.http.get(url, {
      observe: 'response',
      responseType: 'arraybuffer'
    }).subscribe(
      (res: any) => {
        let fileName = res.headers.get('Content-Disposition').match(/filename=([^;]+)/);
        const contentType = res.headers.get('Content-Type');
        fileName = fileName && fileName.length > 0 ? fileName[1] : null;
        fileName = fileName ? decodeURI(escape(fileName)) : null; // 先ISO-8859-1编码，再utf8解码
        const file = new File([res.body], fileName, { type: contentType ? contentType : 'application/octet-stream' });
        const downloadUrl = window.URL.createObjectURL(file);
        window.open(downloadUrl, '_self');
        this.exportLoading2 = false;
      },
      e => {
        console.log('错误', e);
        this.exportLoading2 = false;
      }
    );
  }

  // 使用<a>元素的特点，等于发起一次get请求，并且可以使用<a>元素的download属性设置文件名，替代window.open()方式
  fileDownLoad3() {
    const url = '/api/file/download';
    this.exportLoading3 = true;
    this.http.get(url, {
      observe: 'response',
      responseType: 'arraybuffer'
    }).subscribe(
      (res: any) => {
        const link = document.createElement('a');
        let fileName = res.headers.get('Content-Disposition').match(/filename=([^;]+)/);
        const contentType = res.headers.get('Content-Type');
        fileName = fileName && fileName.length > 0 ? fileName[1] : null;
        fileName = fileName ? decodeURI(escape(fileName)) : null; // 先ISO-8859-1编码，再utf8解码
        const blob = new Blob([res.body], { type: contentType ? contentType : 'application/octet-stream' });
        link.setAttribute('href', window.URL.createObjectURL(blob));
        link.setAttribute('download', fileName ? fileName : 'download');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.exportLoading3 = false;
      },
      e => {
        console.log('错误', e);
        this.exportLoading2 = false;
      }
    );
  }

  // 本地下载
  fileDownLoad4() {
    const url = '/api/hello';
    this.http.get<HttpResponse<Blob>>(url, {
      observe: 'response',
      responseType: 'blob' as 'json'
    }).subscribe(
      (res: any) => {
        const contentType = res.headers.get('Content-Type');
        const blob = new Blob([res.body],{ type: contentType ? contentType : 'application/octet-stream' });
        fileSaver.saveAs(blob, 'test.txt');
      },
      e => {
        console.log('错误', e);
      }
    );
  }

  constructor(
    private helloService: HelloService,
    private http: HttpClient
  ) {}
}
