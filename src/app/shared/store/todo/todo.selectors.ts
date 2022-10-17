import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { TodoState } from "./todo.reducer";

const _todoState = (appState: AppState) => appState.todoState;
export const todoListSelector = createSelector(
  _todoState,
  (todoState: TodoState) => todoState.todoList,
);