import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import G2 from '@antv/g2/build/g2';

// declare var G2: any;
@Component({
  selector: 'app-g2-custom-legend-i',
  templateUrl: './g2-custom-legend-i.component.html',
  styleUrls: ['./g2-custom-legend-i.component.css']
})
export class G2CustomLegendIComponent implements OnInit {
  @ViewChild('c1', {static: true})
  container: ElementRef;

  chart: any;

  data = [
    { item: '事例一', count: 40, percent: 0.4 },
    { item: '事例二', count: 21, percent: 0.21 },
    { item: '事例三', count: 17, percent: 0.17 },
    { item: '事例四', count: 13, percent: 0.13 },
    { item: '事例五', count: 9, percent: 0.09 }
  ];

  constructor() { }

  ngOnInit() {
    const data = this.data;
    const chart = this.chart = new G2.Chart({
      container: this.container.nativeElement,
      forceFit: true,
      height: 500,
      animate: false
    });

    chart.source(data, {
      percent: {
        formatter: val => {
          val = (val * 100) + '%';
          return val;
        }
      }
    });

    chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    });

    chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });

    chart.legend({
      useHtml: true,
      flipPage: true,
      itemTpl: () => {
        return '<li class="g2-legend-list-item item-{index} {checked}" data-color="{originColor}" data-value="{originValue}">' +
          '<i class="g2-legend-marker" style="background-color:{color};"></i>' +
          '<span class="g2-legend-text">{value}</span></li>';
      },
      // itemTpl: '<li class="g2-legend-list-item item-{index} {checked}" data-color="{originColor}" data-value="{originValue}">' +
      //   '<i class="g2-legend-marker" style="background-color:{color};"></i>' +
      //   '<span class="g2-legend-text">{value}</span></li>',
      onClick: (e) => {
        console.log('图例被点击', e);
      }
    });

    // 辅助文本
    chart.guide().html({
      position: [ '50%', '50%' ],
      html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机' +
        '<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
      alignX: 'middle',
      alignY: 'middle'
    });

    const interval = chart.intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + val;
        }
      })
      .tooltip('item*percent', (item, percent) => {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });

    chart.render();
    interval.setSelected(data[0]);
  }

  switchData(index) {
    switch (index) {
      case 2:
        this.data = [
          { item: '事例一', count: 50, percent: 0.5 },
          { item: '事例二', count: 11, percent: 0.11 },
          { item: '事例三', count: 7, percent: 0.7 },
          { item: '事例四', count: 13, percent: 0.13 },
          { item: '事例五', count: 9, percent: 0.09 },
          { item: '事例六', count: 1, percent: 0.1 }
        ];
        this.chart.changeData(this.data);
        break;
      case 1:
        this.data = [
          { item: '事例一', count: 70, percent: 0.7 },
          { item: '事例二', count: 11, percent: 0.11 },
          { item: '事例三', count: 9, percent: 0.9 },
          { item: '事例四', count: 1, percent: 0.1 },
        ];
        this.chart.changeData(this.data);
        break;
      case 0:
        this.data = [
          { item: '事例一', count: 40, percent: 0.4 },
          { item: '事例二', count: 21, percent: 0.21 },
          { item: '事例三', count: 17, percent: 0.17 },
          { item: '事例四', count: 13, percent: 0.13 },
          { item: '事例五', count: 9, percent: 0.09 }
        ];
        this.chart.changeData(this.data);
        break;
    }
  }

}
