import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/shared/models/todo.model";

const _componentName = `MyTodo Component`;

export const loadTodoListAction = createAction(`[${_componentName}] loadTodoListAction.`);
export const loadTodoListSuccessAction = createAction(
  `[${_componentName}] loadTodoListSuccessAction.`,
  props<{ todoList: Todo[] }>(),
);
export const loadTodoListFailureAction = createAction(
  `[${_componentName}] loadTodoListFailureAction.`,
  props<{ error: string | null }>(),
);

export const createTodoAction = createAction(
  `[${_componentName}] createTodoAction.`,
  props<{ content: string }>(),
);
export const deleteTodoAction = createAction(
  `[${_componentName}] deleteTodoAction.`,
  props<{ id: string }>(),
);