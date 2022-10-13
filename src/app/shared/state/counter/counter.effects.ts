import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CounterService } from '../../services/counter.service';
import { AppState } from '../app.state';
import { decrementCounterAction, incrementCounterAction, loadCounterAction, loadCounterFailureAction, loadCounterSuccessAction, resetCounterAction } from './counter.actions';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { counterSelector } from './counter.selectors';

@Injectable({
  providedIn: 'root'
})
export class CounterEffects {

  constructor(
    private _actions: Actions,
    private _store: Store<AppState>,
    private _counterService: CounterService,
  ) { }

  loadCounterEffect = createEffect(() => 
    this._actions.pipe(
      ofType(loadCounterAction),
      switchMap(() => 
        from(this._counterService.loadCounter()).pipe(
          map((res) => {
            console.info(`loadCounterSuccessAction is calling. res is: ${res}`);
            return loadCounterSuccessAction({ counter: res });
          }),
          catchError((error) => {
            console.info(`loadCounterFailureAction is calling. error is: ${error}`);
            return of(loadCounterFailureAction({ error: error }))
          }),
        ),
      ),
    )
  );

  saveCounterEffect = createEffect(() => 
    this._actions.pipe(
      ofType(incrementCounterAction, decrementCounterAction, resetCounterAction),
      withLatestFrom(this._store.select(counterSelector)),
      switchMap(([action, counter]) => 
        from(this._counterService.saveCounter(counter)),
      ),
    ),
    { dispatch: false },
  );
}
