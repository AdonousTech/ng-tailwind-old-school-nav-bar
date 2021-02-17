import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavBarModule } from '../components/icon-nav-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconNavBarModule
  ],
  exports: [
    IconNavBarModule
  ]
})
export class CustomComponentsModule { }
