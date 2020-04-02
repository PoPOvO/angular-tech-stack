import { NgModule } from '@angular/core';

import { TableRoutingModule } from './table-routing.module';
import {ShareModule} from '../../../share/share.module';
import { TableEllipsisIComponent } from './table-ellipsis-i/table-ellipsis-i.component';
import { TableRootComponent } from './table-root/table-root.component';
import { Table1Component } from './table1/table1.component';
import { TableEditableViewableComponent } from './table-editable-viewable/table-editable-viewable.component';


@NgModule({
  declarations: [TableEllipsisIComponent, TableRootComponent, Table1Component, TableEditableViewableComponent],
  imports: [
    ShareModule,
    TableRoutingModule
  ]
})
export class TableModule { }
