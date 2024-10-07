import { angularMaterialRenderers } from '@jsonforms/angular-material';

import { CustomRendererInputBoolean } from './custom-renderer-input-boolean.component';
import { CustomRendererInputDateTime } from './custom-renderer-input-date-time.component';
import { CustomRendererInputDate } from './custom-renderer-input-date.component';
import { CustomRendererInputEnum } from './custom-renderer-input-enum.component';
import { CustomRendererInputNumber } from './custom-renderer-input-number.component';
import { CustomRendererInputString } from './custom-renderer-input-string.component';
import { CustomRendererInputTextarea } from './custom-renderer-input-textarea.component';
import { CustomRendererLayoutArray } from './custom-renderer-layout-array.component';
import { CustomRendererLayoutGroup } from './custom-renderer-layout-group.component';
// import { CustomRendererLayoutStepper } from './custom-renderer-layout-stepper.component';
// import isEmpty from 'lodash/isEmpty';
import { CustomRendererLayoutTabs } from './custom-renderer-layout-tabs.component';
import {
  JsonSchema,
  TesterContext,
  UISchemaElement,
  and,
  isBooleanControl,
  isDateControl,
  isDateTimeControl,
  isEnumControl,
  isIntegerControl,
  isMultiLineControl,
  isNumberControl,
  isObjectArrayControl,
  isObjectArrayWithNesting,
  isPrimitiveArrayControl,
  isStringControl,
  or,
  rankWith,
  uiTypeIs,
} from '@jsonforms/core';
import { CustomRendererLayoutStepper } from './custom-renderer-layout-stepper.component';

// const isFileControl = schemaMatches((schema) => {
//   return !isEmpty(schema);
// });
// const isNotFileControl = schemaMatches((schema) => {
//   return !isFileControl;
// });

// const isItemPickerControl = schemaMatches(
//   (schema) => {
//     return !isEmpty(schema) &&
//       (schema.type === 'object' && schema['pledFormat'] === 'ITEM') ||
//       (schema.type === 'array' && schema['pledFormat'] === 'ITEM') ||
//       (schema.type === 'array' && schema?.items && schema.items['pledFormat'] === 'ITEM') ||
//       (schema.type === 'array' && schema?.items && schema?.items['$ref']?.includes('#/$defs/'));
//   },
// );

export const ESN_RENDERER = [
  // {
  //   tester: (uischema: UISchemaElement) =>
  //     uischema?.type?.toLocaleLowerCase() === 'pled_item' ? 1 : -1,
  //   renderer: CustomRendererItemPickerComponent,
  // },
  {
    tester: (uischema: UISchemaElement) =>
      uischema?.type?.toLocaleLowerCase() === 'stepper' ? 1 : -1,
    renderer: CustomRendererLayoutStepper,
  },
  {
    tester: (uischema: UISchemaElement) =>
      uischema?.type?.toLocaleLowerCase() === 'tabs' ? 1 : -1,
    renderer: CustomRendererLayoutTabs,
  },
  {
    tester: rankWith(1, uiTypeIs('Group')),
    renderer: CustomRendererLayoutGroup,
  },
  {
    tester: rankWith(4, and(isObjectArrayWithNesting)),
    renderer: CustomRendererLayoutArray,
  },
  {
    tester: rankWith(3, and(or(isObjectArrayControl, isPrimitiveArrayControl))),
    renderer: CustomRendererLayoutArray,
  },
  {
    tester: rankWith(2, or(isNumberControl, isIntegerControl)),
    renderer: CustomRendererInputNumber,
  },
  {
    tester: rankWith(2, isDateControl),
    renderer: CustomRendererInputDate,
  },
  {
    tester: rankWith(2, isDateTimeControl),
    renderer: CustomRendererInputDateTime,
  },
  {
    tester: rankWith(1, isStringControl),
    renderer: CustomRendererInputString,
  },
  {
    tester: rankWith(2, isMultiLineControl),
    renderer: CustomRendererInputTextarea,
  },
  {
    tester: rankWith(2, isBooleanControl),
    renderer: CustomRendererInputBoolean,
  },
  {
    tester: rankWith(2, isEnumControl),
    renderer: CustomRendererInputEnum,
  },
  // {
  //   tester: rankWith(1, isFileControl),
  //   renderer: CustomRendererInputFile,
  // },
  // {
  //   tester: rankWith(2, isFileControl),
  //   renderer: CustomRendererInputFile,
  // },
  // {
  //   tester: rankWith(3, isFileControl),
  //   renderer: CustomRendererInputFile,
  // },
  // {
  //   tester: rankWith(1, isItemPickerControl),
  //   renderer: CustomRendererItemPickerComponent,
  // },
  // {
  //   tester: rankWith(2, isItemPickerControl),
  //   renderer: CustomRendererItemPickerComponent,
  // },
  // {
  //   tester: rankWith(3, isItemPickerControl),
  //   renderer: CustomRendererItemPickerComponent,
  // },
  ...angularMaterialRenderers,
];
function isFileControl(
  uischema: UISchemaElement,
  schema: JsonSchema,
  context: TesterContext
): boolean {
  throw new Error('Function not implemented.');
}
