import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconNavBarComponent } from './icon-nav-bar.component';



@NgModule({
  declarations: [IconNavBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IconNavBarComponent
  ]
})
export class IconNavBarModule { }
