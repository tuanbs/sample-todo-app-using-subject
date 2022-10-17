import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from 'src/app/shared/store';
import { loadTodoListAction, loadTodoListFailureAction, loadTodoListSuccessAction, createTodoAction, deleteTodoAction } from './todo.actions';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { todoListSelector } from './todo.selectors';
import { MyTodoService } from 'src/app/shared/services/my-todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoEffects {

  constructor(
    private _actions: Actions,
    private _store: Store<AppState>,
    private _myTodoService: MyTodoService,
  ) { }

  loadTodoListEffect = createEffect(() => 
    this._actions.pipe(
      ofType(loadTodoListAction),
      switchMap(() => {
        return this._myTodoService.loadTodoList().pipe(
          map((res) => loadTodoListSuccessAction({ todoList: res })),
          catchError((error) => of(loadTodoListFailureAction({ error: error }))),
        );
      }),
    )
  );

  saveTodoListEffect = createEffect(() => 
    this._actions.pipe(
      ofType(createTodoAction, deleteTodoAction),
      withLatestFrom(this._store.select(todoListSelector)),
      switchMap(([action, todoList]) => {
        return this._myTodoService.saveTodoList(todoList);
      },),
    ),
    { dispatch: false },
  );
}
