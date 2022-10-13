import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AppConstants } from 'src/app/app.constants';
import { sampleReducer } from 'src/app/shared/store/sample/sample.reducer';
import { SampleEffects } from 'src/app/shared/store/sample/sample.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,

    /*
    * - Feature states behave in the same way root states do, but allow you to define them with specific feature areas in your application. 
      Your state is one large object, and feature states register additional keys and values in that object.
    * - NOTE: The key's name must be the same as the key's name in `AppState`.
    */
    StoreModule.forFeature(AppConstants.sampleStateKeyName, sampleReducer),
    EffectsModule.forFeature([SampleEffects]),

    SharedModule,
    SampleRoutingModule,
  ]
})
export class SampleModule { }
