import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/shared/models/todo.model";
import { loadTodoListAction, loadTodoListFailureAction, loadTodoListSuccessAction, createTodoAction, deleteTodoAction } from "./todo.actions";

export interface TodoState {
  todoList: Todo[];
  status: `pending` | `loading` | `error` | `success`;
  error: string | null;
}

const _initialState: TodoState = {
  todoList: [],
  status: `pending`,
  error: null,
};

export const todoReducer = createReducer(
  _initialState,
  on(loadTodoListAction, (state) => ({
    ...state,
    status: `loading`,
  })),
  on(loadTodoListSuccessAction, (state, { todoList: todoList }) => ({
    ...state,
    status: `success`,
    error: null,
    todoList: todoList,
  })),
  on(loadTodoListFailureAction, (state, { error: error }) => ({
    ...state,
    status: `error`,
    error: error,
  })),

  on(createTodoAction, (state, { content: content }) => ({
    ...state,
    todoList: [...state.todoList, { id: Date.now().toString(), content: content }],
  })),
  on(deleteTodoAction, (state, { id: id }) => ({
    ...state,
    /*
    * NOTE: If I use `todos:` instead of `todoList`, then it doesn't cause any error which is really bad because I spent hours to spot this error.
    */
    todoList: state.todoList.filter((todo) => {
      return todo.id !== id;
    }),
  })),
);