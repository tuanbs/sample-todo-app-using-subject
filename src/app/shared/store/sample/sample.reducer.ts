import { createReducer, on } from "@ngrx/store";
import { loadSampleAction, loadSampleFailureAction, loadSampleSuccessAction, sampleAction } from "./sample.actions";

export interface SampleState {
  sample: number;
  status: `pending` | `loading` | `error` | `success`;
  error: string | null;
}

const _initialState: SampleState = {
  sample: 0,
  status: `pending`,
  error: null,
};

export const sampleReducer = createReducer(
  _initialState,
  on(loadSampleAction, (state) => ({
    ...state,
    status: `loading`,
  })),
  on(loadSampleSuccessAction, (state, { sample }) => ({
    ...state,
    status: `success`,
    error: null,
    sample: sample,
  })),
  on(loadSampleFailureAction, (state, { error }) => ({
    ...state,
    status: `error`,
    error: error,
  })),

  on(sampleAction, (state) => ({
    ...state,
    sample: state.sample + 1,
  })),
);