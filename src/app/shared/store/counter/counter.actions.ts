import { createAction, props } from "@ngrx/store";

const _componentName = `Counter Component`;

export const loadCounterAction = createAction(`[${_componentName}] loadCounterAction.`);
export const loadCounterSuccessAction = createAction(
  `[${_componentName}] loadCounterSuccessAction.`,
  props<{ counter: number }>(),
);
export const loadCounterFailureAction = createAction(
  `[${_componentName}] loadCounterFailureAction.`,
  props<{ error: string | null }>(),
);

export const incrementCounterAction = createAction(`[${_componentName}] incrementCounterAction.`);
export const decrementCounterAction = createAction(`[${_componentName}] decrementCounterAction.`);
export const resetCounterAction = createAction(`[${_componentName}] resetCounterAction.`);