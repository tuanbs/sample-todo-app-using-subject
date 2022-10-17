import { AppConstants } from "src/app/app.constants";
import { CounterState } from "./counter/counter.reducer";
import { SampleState } from "./sample/sample.reducer";
import { TodoState } from "./todo/todo.reducer";

export interface AppState {
  [AppConstants.sampleStateKeyName]: SampleState,
  [AppConstants.counterStateKeyName]: CounterState,
  [AppConstants.todoStateKeyName]: TodoState,
}