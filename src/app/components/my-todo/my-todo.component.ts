import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from 'src/app/shared/models/todo.model';
import { AppState } from 'src/app/shared/store';
import { createTodoAction, deleteTodoAction, loadTodoListAction } from 'src/app/shared/store/todo/todo.actions';
import { todoListSelector } from 'src/app/shared/store/todo/todo.selectors';

@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.scss']
})
export class MyTodoComponent implements OnInit {
  todoList$ = this._store.select(todoListSelector);
  todo = '';

  constructor(
    private _store: Store<AppState>,
  ) {
    // this.todoList$ = this._store.select(todoListSelector);
  }

  ngOnInit(): void {
    this._store.dispatch(loadTodoListAction());
  }

  createTodo() {
    if (this.todo?.trim()) {
      this._store.dispatch(createTodoAction({ content: this.todo }));
      this.todo = '';
    }
  }
  
  deleteTodo(todo: Todo) {
    this._store?.dispatch(deleteTodoAction({ id: todo.id ?? '' }));
  }
}
