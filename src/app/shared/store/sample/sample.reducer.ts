import { createReducer, on } from "@ngrx/store";
import { Sample } from "../../models/sample.model";
import { loadSampleListAction, loadSampleListFailureAction, loadSampleListSuccessAction, createSampleAction } from "./sample.actions";

export interface SampleState {
  sampleList: Sample[];
  status: `pending` | `loading` | `error` | `success`;
  error: string | null;
}

const _initialState: SampleState = {
  sampleList: [],
  status: `pending`,
  error: null,
};

export const sampleReducer = createReducer(
  _initialState,
  on(loadSampleListAction, (state) => ({
    ...state,
    status: `loading`,
  })),
  on(loadSampleListSuccessAction, (state, { sampleList: sampleList }) => ({
    ...state,
    status: `success`,
    error: null,
    sampleList: sampleList,
  })),
  on(loadSampleListFailureAction, (state, { error: error }) => ({
    ...state,
    status: `error`,
    error: error,
  })),

  on(createSampleAction, (state, { content: content }) => ({
    ...state,
    sampleList: [...state.sampleList, { id: Date.now().toString(), content: content }],
  })),
);