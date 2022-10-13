import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AppConstants } from 'src/app/app.constants';
import { SharedModule } from 'src/app/shared/shared.module';
import { counterReducer } from 'src/app/shared/state/counter/counter.reducer';
import { CounterEffects } from 'src/app/shared/state/counter/counter.effects';
import { sampleReducer } from 'src/app/shared/state/sample/sample.reducer';
import { SampleEffects } from 'src/app/shared/state/sample/sample.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    /*
    * - NOTE: The key's name must be the same as the key's name in `AppState`.
    */
    StoreModule.forRoot({[AppConstants.counterStateKeyName]: counterReducer}),
    EffectsModule.forRoot([CounterEffects]),
    
    // StoreModule.forRoot({[AppConstants.sampleStateKeyName]: sampleReducer}),
    // EffectsModule.forRoot([SampleEffects]),

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
