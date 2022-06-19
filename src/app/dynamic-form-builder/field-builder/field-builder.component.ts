import { Component, Input } from '@angular/core';

@Component({
  selector: 'field-builder',
  templateUrl: './field-builder.component.html',
})
export class FieldBuilderComponent {
  @Input() field:any;
  @Input() form:any;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
}
