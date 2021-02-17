import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDemoComponent } from './app-demo.component';
import { CustomComponentsModule } from '../../shared/custom-components';


@NgModule({
  declarations: [AppDemoComponent],
  imports: [
    CommonModule,
    CustomComponentsModule
  ]
})
export class AppDemoModule { }
