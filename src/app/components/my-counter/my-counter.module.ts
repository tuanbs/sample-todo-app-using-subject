import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCounterRoutingModule } from './my-counter-routing.module';
import { MyCounterComponent } from './my-counter.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MyCounterComponent,
  ],
  imports: [
    CommonModule,

    SharedModule,
    MyCounterRoutingModule,
  ]
})
export class MyCounterModule { }
