import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDemoComponent } from './component-demo.component';
import { CustomComponentsModule } from '../../../shared/custom-components';



@NgModule({
  declarations: [ComponentDemoComponent],
  imports: [
    CommonModule,
    CustomComponentsModule
  ]
})
export class ComponentDemoModule { }
