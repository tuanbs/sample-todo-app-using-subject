import { createAction, props } from "@ngrx/store";

const _componentName = `Sample Component`;

export const loadSampleAction = createAction(`[${_componentName}] loadSampleAction.`);
export const loadSampleSuccessAction = createAction(
  `[${_componentName}] loadSampleSuccessAction.`,
  props<{ sample: number }>(),
);
export const loadSampleFailureAction = createAction(
  `[${_componentName}] loadSampleFailureAction.`,
  props<{ error: string | null }>(),
);

export const sampleAction = createAction(`[${_componentName}] sampleAction.`);