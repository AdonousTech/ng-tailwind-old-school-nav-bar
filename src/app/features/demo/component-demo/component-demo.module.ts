import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDemoComponent } from './component-demo.component';
import { ComponentDemoRoutingModule } from './component-demo-routing.module';
import { CustomComponentsModule } from '../../../shared/custom-components';



@NgModule({
  declarations: [ComponentDemoComponent],
  imports: [
    CommonModule,
    CustomComponentsModule,
    ComponentDemoRoutingModule
  ]
})
export class ComponentDemoModule { }
