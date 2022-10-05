import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public allTodos$ = this._todoService.getTodos();
  public todo = '';

  constructor(
    private _todoService: TodoService,
  ) { }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.todo?.trim()) {
      this._todoService?.addTodo(this.todo);
      this.todo = '';
    }
  }

  removeTodo(todo: Todo) {
    this._todoService?.removeTodo(todo?.id);
  }
}
