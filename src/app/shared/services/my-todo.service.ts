import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { Todo } from 'src/app/shared/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class MyTodoService {

  constructor() { }

  loadTodoList(): Observable<Todo[]> {
    return new Observable<Todo[]>((observer) => {
      const todos: Todo[] = localStorage.getItem(AppConstants.localTodosDbName) == null ? [] : JSON.parse(localStorage.getItem(AppConstants.localTodosDbName)!);
      observer.next(todos);
    });
  }

  async saveTodoList(todos: Todo[]) {
    // console.info(`todos is: ${JSON.stringify(todos)}`);
    return localStorage?.setItem(AppConstants.localTodosDbName, JSON.stringify(todos));
  }
}
