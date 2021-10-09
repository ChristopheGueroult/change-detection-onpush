import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullwidthComponent } from './components/template-fullwidth/template-fullwidth.component';



@NgModule({
  declarations: [
    TemplateFullwidthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateFullwidthComponent
  ]
})
export class TemplatesModule { }
