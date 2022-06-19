import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form.module';
import { FirstFormComponent } from './first-form/first-form.component';

@NgModule({
  declarations: [ AppComponent, FirstFormComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
