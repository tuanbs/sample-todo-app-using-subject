import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { CounterState } from "./counter.reducer";

const _counterState = (appState: AppState) => appState.counterState;
export const counterSelector = createSelector(
  _counterState,
  (counterState: CounterState) => counterState?.counter,
);
export const counterErrorSelector = createSelector(
  _counterState,
  (counterState: CounterState) => counterState?.error,
);