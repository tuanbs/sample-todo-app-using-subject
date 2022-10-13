import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { SampleState } from "./sample.reducer";

const _sampleState = (appState: AppState) => appState.sampleState;
export const sampleSelector = createSelector(
  _sampleState,
  (sampleState: SampleState) => sampleState?.sample,
);