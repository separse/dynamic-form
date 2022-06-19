import { Component } from '@angular/core';
import { IField } from '../dynamic-form-builder/field.model';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent {

  fields: IField[] = [
    {
      type: 'text',
      name: 'fullName',
      label: 'Full Name',
      value: '',
      readonly: false,
      placeholder: 'please write your full name',
      validators: ['required'],
    },
    {
      type: 'number',
      name: 'phoneNumber',
      label: 'Phone Number',
      value: '',
      readonly: false,
      placeholder: 'please fill with an available phone number',
      validators: ['required', 'mobileNumber'],
    },
    {
      type: 'date',
      name: 'birthday',
      label: 'Birthday',
      value: '',
      readonly: false,
      placeholder: 'please choose your birthday',
      validators: ['required'],
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      readonly: false,
      placeholder: 'no option is selected',
      options: [
        { key: 'ir', label: 'Iran' },
        { key: 'uk', label: 'United Kingdom' },
        { key: 'sw', label: 'Sweden' },
        { key: 'fn', label: 'Finland' },
        { key: 'can', label: 'Caneda' },
        { key: 'it', label: 'Italy' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      placeholder: 'write a valid email',
      readonly: false,
      validators: ['required', 'email'],
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: '',
      readonly: false,
      validators: ['required'],
      options: [
        { key: 'male', label: 'Male' },
        { key: 'female', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      readonly: false,
      options: [
        { key: 'goingPicnic', label: 'Going picnic' },
        { key: 'cooking', label: 'Cooking' },
        { key: 'watchingTV', label: 'Watching TV' }
      ]
    },
  ];

  submit(formValue: any): void  {
    console.log(formValue);
  }

}
