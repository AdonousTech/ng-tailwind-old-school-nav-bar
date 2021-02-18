import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconNavBarComponent } from './icon-nav-bar.component';
import { IconNavBarItemBindingDirective } from './providers/icon-nav-bar-item-binding.directive';
import { IconNavBarItemComponent } from './icon-nav-bar-item/icon-nav-bar-item.component';



@NgModule({
  declarations: [IconNavBarComponent, 
                 IconNavBarItemBindingDirective, 
                 IconNavBarItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IconNavBarComponent,
    IconNavBarItemBindingDirective,
    IconNavBarItemComponent
  ]
})
export class IconNavBarModule { }
