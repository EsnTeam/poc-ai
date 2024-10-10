import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JsonFormsAngularService, JsonFormsModule } from '@jsonforms/angular';
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
  EsnFlagModule,
  EsnGlobalConfigurationModule,
  EsnIconModule,
  EsnIconsRegistry,
  EsnInputModule,
  EsnLoaderModule,
  EsnMenuModule,
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
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WrappedTextComponent } from './components/wrapped-text/wrapped-text.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

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

const DECLARE_AND_EXPORT = [
  ...CUSTOM_RENDERERS_PROVIDER,
  WrappedTextComponent,
  LanguageSelectorComponent,
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

  A11yModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatFormFieldModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  PortalModule,
  ScrollingModule,

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
  EsnFlagModule,
  EsnMenuModule,
  //
  JsonFormsModule,
  JsonFormsAngularMaterialModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: [...DECLARE_AND_EXPORT],
  imports: [CommonModule, ...importAndExport],
  exports: [...importAndExport, ...DECLARE_AND_EXPORT],
  providers: [
    DatePipe,
    JsonFormsAngularService,
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
