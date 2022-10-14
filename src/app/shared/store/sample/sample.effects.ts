import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SampleService } from 'src/app/shared/services/sample.service';
import { AppState } from 'src/app/shared/store';
import { loadSampleListAction, loadSampleListFailureAction, loadSampleListSuccessAction, createSampleAction } from './sample.actions';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { sampleSelector } from './sample.selectors';

@Injectable({
  providedIn: 'root'
})
export class SampleEffects {

  constructor(
    private _actions: Actions,
    private _store: Store<AppState>,
    private _sampleService: SampleService,
  ) { }

  loadSampleEffect = createEffect(() => 
    this._actions.pipe(
      ofType(loadSampleListAction),
      switchMap(() => 
        from(this._sampleService.loadSample()).pipe(
          map((res) => loadSampleListSuccessAction({ sample: res })),
          catchError((error) => of(loadSampleListFailureAction({ error: error }))),
        ),
      ),
    )
  );

  saveSampleEffect = createEffect(() => 
    this._actions.pipe(
      ofType(createSampleAction),
      withLatestFrom(this._store.select(sampleSelector)),
      switchMap(([action, sample]) => 
        from(this._sampleService.saveSample(sample)),
      ),
    ),
    { dispatch: false },
  );
}
