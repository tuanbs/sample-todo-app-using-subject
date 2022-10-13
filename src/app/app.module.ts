import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    /* Register your application with an empty object for the root state. */
    StoreModule.forRoot({}),
    // SampleModule, // Add this line to load the SampleModule's state eagerly. Otherwise, it will be loaded lazily.

    /* The EffectsModule.forRoot() method must be added to your AppModule imports even if you don't register any root-level effects. */
    EffectsModule.forRoot([]),

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
