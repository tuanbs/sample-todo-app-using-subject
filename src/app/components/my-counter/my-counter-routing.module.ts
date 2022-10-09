import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from './my-counter.component';

const routes: Routes = [
  {
    path: '',
    component: MyCounterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCounterRoutingModule { }
