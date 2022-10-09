import { AppConstants } from "src/app/app.constants";
import { CounterState } from "./counter/counter.reducer";

export interface AppState {
  [AppConstants.counterStateKeyName]: CounterState,
}