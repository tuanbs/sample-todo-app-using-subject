import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
    SampleRoutingModule,
  ]
})
export class SampleModule { }
