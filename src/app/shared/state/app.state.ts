import { AppConstants } from "src/app/app.constants";
import { CounterState } from "./counter/counter.reducer";
import { SampleState } from "./sample/sample.reducer";

export interface AppState {
  [AppConstants.sampleStateKeyName]: SampleState,
  [AppConstants.counterStateKeyName]: CounterState,
}