import { CustomRendererInputBoolean } from './custom-renderer-input-boolean.component';
import { CustomRendererInputDateTime } from './custom-renderer-input-date-time.component';
import { CustomRendererInputDate } from './custom-renderer-input-date.component';
import { CustomRendererInputEnum } from './custom-renderer-input-enum.component';
import { CustomRendererInputNumber } from './custom-renderer-input-number.component';
import { CustomRendererInputString } from './custom-renderer-input-string.component';
import { CustomRendererInputTextarea } from './custom-renderer-input-textarea.component';
import { CustomRendererLayoutArray } from './custom-renderer-layout-array.component';
import { CustomRendererLayoutExpansion } from './custom-renderer-layout-expansion.component';
import { CustomRendererLayoutGroup } from './custom-renderer-layout-group.component';
import { CustomRendererLayoutStepperControl } from './custom-renderer-layout-stepper-control.component';
import { CustomRendererLayoutStepper } from './custom-renderer-layout-stepper.component';
import { CustomRendererLayoutTabs } from './custom-renderer-layout-tabs.component';

import { CustomRendererLayoutPanels } from './custom-renderer-layout-panels.component';

export const CUSTOM_RENDERERS_PROVIDER = [
  CustomRendererInputBoolean,
  CustomRendererInputDateTime,
  CustomRendererInputDate,
  CustomRendererInputEnum,
  CustomRendererInputNumber,
  CustomRendererInputString,
  CustomRendererInputTextarea,
  CustomRendererLayoutArray,
  CustomRendererLayoutExpansion,
  CustomRendererLayoutPanels,
  CustomRendererLayoutGroup,
  CustomRendererLayoutStepperControl,
  CustomRendererLayoutStepper,
  CustomRendererLayoutTabs,
];
