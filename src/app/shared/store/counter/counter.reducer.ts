import { createReducer, on } from "@ngrx/store";
import { decrementCounterAction, incrementCounterAction, loadCounterAction, loadCounterFailureAction, loadCounterSuccessAction, resetCounterAction } from "./counter.actions";

export interface CounterState {
  counter: number;
  status: `pending` | `loading` | `error` | `success`;
  error: string | null;
}

const _initialState: CounterState = {
  counter: 0,
  status: `pending`,
  error: null,
};

export const counterReducer = createReducer(
  _initialState,
  on(loadCounterAction, (state) => ({
    ...state,
    status: `loading`,
    // counter: state.counter,
  })),
  on(loadCounterSuccessAction, (state, { counter: counter }) => ({
    ...state,
    status: `success`,
    error: null,
    counter: counter,
  })),
  on(loadCounterFailureAction, (state, { error: error }) => ({
    ...state,
    status: `error`,
    error: error,
  })),

  on(incrementCounterAction, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(decrementCounterAction, (state) => ({
    ...state,
    counter: state.counter - 1,
  })),
  on(resetCounterAction, (state) => _initialState),
);