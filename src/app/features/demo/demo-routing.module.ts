import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./component-demo/component-demo.module').then(m => m.ComponentDemoModule)
  }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DemoRoutingModule { }
