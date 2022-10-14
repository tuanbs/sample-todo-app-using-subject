import { createAction, props } from "@ngrx/store";
import { Sample } from "src/app/shared/models/sample.model";

const _componentName = `Sample Component`;

export const loadSampleListAction = createAction(`[${_componentName}] loadSampleListAction.`);
export const loadSampleListSuccessAction = createAction(
  `[${_componentName}] loadSampleListSuccessAction.`,
  props<{ sampleList: Sample[] }>(),
);
export const loadSampleListFailureAction = createAction(
  `[${_componentName}] loadSampleListFailureAction.`,
  props<{ error: string | null }>(),
);

export const createSampleAction = createAction(
  `[${_componentName}] createSampleAction.`,
  props<{ content: string }>(),
);