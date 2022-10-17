import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTodoRoutingModule } from './my-todo-routing.module';
import { MyTodoComponent } from './my-todo.component';
import { StoreModule } from '@ngrx/store';
import { AppConstants } from 'src/app/app.constants';
import { todoReducer } from 'src/app/shared/store/todo/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from 'src/app/shared/store/todo/todo.effects';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MyTodoComponent
  ],
  imports: [
    CommonModule,

    StoreModule.forFeature(AppConstants.todoStateKeyName, todoReducer),
    EffectsModule.forFeature([TodoEffects]),
    
    MyTodoRoutingModule,
    SharedModule,
  ]
})
export class MyTodoModule { }
