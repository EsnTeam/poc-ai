import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { ToastrModule } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  AllIcons,
  EsnApiCallWrapperModule,
  EsnAsyncContentWrapperModule,
  EsnAutocompleteSelectModule,
  EsnBadgeModule,
  EsnBreadcrumbModule,
  EsnButtonModule,
  EsnCheckboxModule,
  EsnDialogModule,
  EsnDividerModule,
  EsnEmptyStateModule,
  EsnErrorStateModule,
  EsnExpansionModule,
  EsnFileInputModule,
  EsnFilemanagerModule,
  EsnGlobalConfigurationModule,
  EsnIconModule,
  EsnIconsRegistry,
  EsnInputModule,
  EsnLoaderModule,
  EsnPaginatorModule,
  EsnPeoplePickerModule,
  EsnPersonAvatarModule,
  EsnProgressBarModule,
  EsnRadioModule,
  EsnResponsiveModule,
  EsnSelectModule,
  EsnSidenavModule,
  EsnSlideToggleModule,
  EsnStepperModule,
  EsnTabsModule,
  EsnTooltipModule,
} from 'src/assets/external-libs/arom-domain-ipnn-c90-design-lib';
import { CustomRendererInputBoolean } from './renderers/custom-renderer-input-boolean.component';
import { CustomRendererInputDateTime } from './renderers/custom-renderer-input-date-time.component';
import { CustomRendererInputDate } from './renderers/custom-renderer-input-date.component';
import { CustomRendererInputEnum } from './renderers/custom-renderer-input-enum.component';
import { CustomRendererInputNumber } from './renderers/custom-renderer-input-number.component';
import { CustomRendererInputString } from './renderers/custom-renderer-input-string.component';
import { CustomRendererInputTextarea } from './renderers/custom-renderer-input-textarea.component';
import { CustomRendererLayoutArray } from './renderers/custom-renderer-layout-array.component';
import { CustomRendererLayoutExpansion } from './renderers/custom-renderer-layout-expansion.component';
import { CustomRendererLayoutGroup } from './renderers/custom-renderer-layout-group.component';
import { CustomRendererLayoutPanels } from './renderers/custom-renderer-layout-panels.component';
import { CustomRendererLayoutStepperControl } from './renderers/custom-renderer-layout-stepper-control.component';
import { CustomRendererLayoutStepper } from './renderers/custom-renderer-layout-stepper.component';
import { CustomRendererLayoutTabs } from './renderers/custom-renderer-layout-tabs.component';
import { MatBadgeModule } from '@angular/material/badge';

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

const importAndExport = [
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatStepperModule,
  MatBadgeModule,

  EsnButtonModule,
  EsnIconModule,
  EsnTooltipModule,
  EsnLoaderModule,
  EsnInputModule,
  EsnDialogModule,
  EsnSidenavModule,
  EsnStepperModule,
  EsnProgressBarModule,
  EsnSlideToggleModule,
  EsnDividerModule,
  EsnSelectModule,
  // EsnTableModule,
  EsnFileInputModule,
  EsnFilemanagerModule,
  EsnTabsModule,
  EsnAsyncContentWrapperModule,
  EsnBadgeModule,
  EsnEmptyStateModule,
  EsnAutocompleteSelectModule,
  EsnRadioModule,
  EsnExpansionModule,
  EsnErrorStateModule,
  EsnApiCallWrapperModule,
  EsnGlobalConfigurationModule,
  EsnResponsiveModule,
  EsnCheckboxModule,
  EsnPeoplePickerModule,
  EsnPaginatorModule,
  EsnPersonAvatarModule,
  EsnBreadcrumbModule,
  //
  JsonFormsModule,
  JsonFormsAngularMaterialModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: [...CUSTOM_RENDERERS_PROVIDER],
  imports: [CommonModule, ...importAndExport],
  exports: [...importAndExport],
  providers: [
    DatePipe,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class SharedModule {
  constructor(private esnIconsRegistry: EsnIconsRegistry) {
    this.esnIconsRegistry.registerIcons(AllIcons);
  }
}
