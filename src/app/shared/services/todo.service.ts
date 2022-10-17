import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private _loaded = false;

  constructor() { }

  private async _loadTodos() {
    const todos: Todo[] = localStorage.getItem(AppConstants.localTodosDbName) == null ? [] : JSON.parse(localStorage.getItem(AppConstants.localTodosDbName)!);
    
    this._todos$.next(todos);
  }

  private async _saveTodos() {
    return localStorage?.setItem(AppConstants.localTodosDbName, JSON.stringify(this._todos$.value));
  }

  getTodos(): Observable<Todo[]> {
    if (!this._loaded) {
      this._loadTodos();
      this._loaded = true;
    }

    return this._todos$;
  }

  addTodo(content: string) {
    this._todos$.next([
      ...this._todos$.value,
      { id: Date.now().toString(), content: content },
    ]);

    this._saveTodos();
  }

  removeTodo(id?: string) {
    this._todos$.next(this._todos$.value.filter((item: Todo) => item.id != id));

    this._saveTodos();
  }
}
