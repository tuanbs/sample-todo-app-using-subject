import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCounterRoutingModule } from './my-counter-routing.module';
import { MyCounterComponent } from './my-counter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppConstants } from 'src/app/app.constants';
import { counterReducer } from 'src/app/shared/store/counter/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from 'src/app/shared/store/counter/counter.effects';

@NgModule({
  declarations: [
    MyCounterComponent,
  ],
  imports: [
    CommonModule,

    StoreModule.forFeature(AppConstants.counterStateKeyName, counterReducer),
    EffectsModule.forFeature([CounterEffects]),

    SharedModule,
    MyCounterRoutingModule,
  ]
})
export class MyCounterModule { }
