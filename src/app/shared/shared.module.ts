import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCustomMaterialModule } from './app-custom-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,

    AppCustomMaterialModule,
  ],
  exports: [
    AppCustomMaterialModule,
    FormsModule,
  ],
})
export class SharedModule { }
