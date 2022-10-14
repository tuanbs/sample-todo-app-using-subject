import { createReducer, on } from "@ngrx/store";
import { loadSampleListAction, loadSampleListFailureAction, loadSampleListSuccessAction, createSampleAction } from "./sample.actions";

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
  on(loadSampleListAction, (state) => ({
    ...state,
    status: `loading`,
  })),
  on(loadSampleListSuccessAction, (state, { sample }) => ({
    ...state,
    status: `success`,
    error: null,
    sample: sample,
  })),
  on(loadSampleListFailureAction, (state, { error }) => ({
    ...state,
    status: `error`,
    error: error,
  })),

  on(createSampleAction, (state) => ({
    ...state,
    sample: state.sample + 1,
  })),
);