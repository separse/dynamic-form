import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFormComponent,
    FieldBuilderComponent,
  ],
  exports: [DynamicFormComponent],
  providers: []
})
export class DynamicFormBuilderModule { }
