import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentDemoComponent } from './component-demo.component';

const routes = [
  {
    path: '',
    component: ComponentDemoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class ComponentDemoRoutingModule { }
