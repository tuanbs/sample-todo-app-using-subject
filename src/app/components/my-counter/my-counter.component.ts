import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AppState } from 'src/app/shared/store';
import { decrementCounterAction, incrementCounterAction, loadCounterAction, resetCounterAction } from 'src/app/shared/store/counter/counter.actions';
import { CounterState } from 'src/app/shared/store/counter/counter.reducer';
import { counterErrorSelector, counterSelector } from 'src/app/shared/store/counter/counter.selectors';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private _store: Store<AppState>) {
    this.counter$ = this._store?.select(counterSelector);

    this._store.pipe(
      select(counterErrorSelector),
      tap((error) => {
        console.info(`error is: ${error}`);
      }),
    );
  }

  ngOnInit(): void {
    this._store.dispatch(loadCounterAction());
  }

  onIncrement(): void {
    this._store.dispatch(incrementCounterAction());
  }

  onDecrement(): void {
    this._store.dispatch(decrementCounterAction());
  }

  onReset(): void {
    this._store.dispatch(resetCounterAction());
  }
}
