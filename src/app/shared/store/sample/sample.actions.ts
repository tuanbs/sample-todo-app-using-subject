import { createAction, props } from "@ngrx/store";

const _componentName = `Sample Component`;

export const loadSampleListAction = createAction(`[${_componentName}] loadSampleListAction.`);
export const loadSampleListSuccessAction = createAction(
  `[${_componentName}] loadSampleListSuccessAction.`,
  props<{ sample: number }>(),
);
export const loadSampleListFailureAction = createAction(
  `[${_componentName}] loadSampleListFailureAction.`,
  props<{ error: string | null }>(),
);

export const createSampleAction = createAction(`[${_componentName}] createSampleAction.`);