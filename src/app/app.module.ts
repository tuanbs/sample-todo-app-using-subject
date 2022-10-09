import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConstants } from './app.constants';
import { SharedModule } from './shared/shared.module';
import { counterReducer } from './shared/state/counter/counter.reducer';
import { CounterEffects } from './shared/state/counter/counter.effects';

@NgModule({
  declarations: [
    AppComponent
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

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
