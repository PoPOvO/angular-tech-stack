import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { FormRootComponent } from './form-root/form-root.component';
import {ShareModule} from '../../../share/share.module';
import {FormEditableViewableComponent} from './form-editable-viewable/form-editable-viewable.component';


@NgModule({
  declarations: [FormRootComponent, FormEditableViewableComponent],
  imports: [
    ShareModule,
    FormRoutingModule
  ]
})
export class FormModule { }
