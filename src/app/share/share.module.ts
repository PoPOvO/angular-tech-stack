import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { PopupComponent } from './popup/popup.component';
import {PopupService} from './popup/popup.service';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { AllSelectComponent } from './all-select/all-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';
import { AllSelectElseComponent } from './all-select-else/all-select-else.component';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { UnlessDirective } from './directive/unless.directive';
import { NumberPowPipe } from './pipe/number-pow.pipe';
import { ArrFilterPipe } from './pipe/arr-filter.pipe';
import { EmbedTemplateDirective } from './directive/embed-template.directive';
import {MyLibModule} from 'mi-my-lib';
import { IconInputComponent } from './icon-input/icon-input.component';
import { IconInputRefDirective } from './icon-input/icon-input-ref.directive';
import { CodeBoxComponent } from './code-box/code-box.component';
import {G2CustomLegendIComponent} from '../pages/g2-chart/g2-custom-legend-i/g2-custom-legend-i.component';
import {G2ChartModule} from '../pages/g2-chart/g2-chart.module';

/**
 * 共享模块
 */
@NgModule({
  declarations: [
    PopupComponent,
    MyDialogComponent,
    AllSelectComponent,
    HighlightDirective,
    AllSelectElseComponent,
    CustomControlComponent,
    UnlessDirective,
    NumberPowPipe,
    ArrFilterPipe,
    EmbedTemplateDirective,
    IconInputComponent,
    IconInputRefDirective,
    CodeBoxComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    ShareRoutingModule,
    MyLibModule
  ],
  // 需要导出
  exports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    ShareRoutingModule,
    MyDialogComponent,
    AllSelectComponent,
    PopupComponent,
    HighlightDirective,
    CustomControlComponent,
    AllSelectElseComponent,
    UnlessDirective,
    NumberPowPipe,
    ArrFilterPipe,
    EmbedTemplateDirective,
    IconInputComponent,
    IconInputRefDirective,
    CodeBoxComponent,
    MyLibModule
  ],
  providers: [
    PopupService
  ],
  entryComponents: [
    PopupComponent,
    MyDialogComponent
  ]
})
export class ShareModule { }
