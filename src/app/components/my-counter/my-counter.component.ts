import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/state/app.state';
import { decrementCounterAction, incrementCounterAction, loadCounterAction, resetCounterAction } from 'src/app/shared/state/counter/counter.actions';
import { CounterState } from 'src/app/shared/state/counter/counter.reducer';
import { counterSelector } from 'src/app/shared/state/counter/counter.selectors';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private _store: Store<AppState>) {
    this.counter$ = this._store?.select(counterSelector);
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
