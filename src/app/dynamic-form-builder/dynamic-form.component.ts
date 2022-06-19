import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: any[] = [];
  @Output() onSubmit = new EventEmitter();

  form!: FormGroup;

  ngOnInit() {
    let formControls: any = {};
    this.fields.forEach(f => {
      if (f.type !== 'checkbox') {
        if(f.validators) {
          let validators: any[] = [];
          f.validators.forEach((v: any) => {
            switch (v) {
              case 'required':
                validators.push(Validators.required);
                break;
              case 'mobileNumber':
                validators.push(Validators.pattern("(09)[0-9 ]{9}"));
                break;
              case 'email': 
                validators.push(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"));
                break;
              default:
                break;
            }
          });
          formControls[f.name] = new FormControl(f.value || '', Validators.compose(validators));
        } else {
          formControls[f.name] = new FormControl(f.value || '');
        }
      } else {
        let options: any = {};
        f.options.forEach((option: any) => {
          options[option.key] = new FormControl(option.value);
        });
        formControls[f.name] = new FormGroup(options)
      }
    })
    this.form = new FormGroup(formControls);
  }

}
