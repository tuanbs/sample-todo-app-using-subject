import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SampleService } from 'src/app/shared/services/sample.service';
import { AppState } from 'src/app/shared/store';
import { loadSampleListAction, loadSampleListFailureAction, loadSampleListSuccessAction, createSampleAction } from './sample.actions';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { sampleListSelector } from './sample.selectors';

@Injectable({
  providedIn: 'root'
})
export class SampleEffects {

  constructor(
    private _actions: Actions,
    private _store: Store<AppState>,
    private _sampleService: SampleService,
  ) { }

  loadSampleListEffect = createEffect(() => 
    this._actions.pipe(
      ofType(loadSampleListAction),
      switchMap(() => 
        from(this._sampleService.loadSampleList()).pipe(
          map((res) => {
            return loadSampleListSuccessAction({ sampleList: res });
          }),
          catchError((error) => {
            return of(loadSampleListFailureAction({ error: error }));
          }),
        ),
      ),
    )
  );

  saveSampleListEffect = createEffect(() => 
    this._actions.pipe(
      ofType(createSampleAction),
      withLatestFrom(this._store.select(sampleListSelector)),
      switchMap(([action, sample]) => {
        return from(this._sampleService.saveSampleList(sample));
      },),
    ),
    { dispatch: false },
  );
}
