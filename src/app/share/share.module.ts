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
    ArrFilterPipe
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    ShareRoutingModule
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
    ArrFilterPipe
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
