import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './pages/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { AssistantsComponent } from './pages/assistants/assistants.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { FilesComponent } from './pages/files/files.component';
import { HomeComponent } from './pages/home/home.component';
import { AssistantEditionDialogComponent } from './components/assistant-edition-dialog/assistant-edition-dialog.component';
import { DemoComponent } from './pages/demo/demo.component';
import { AttributeSelectorComponent } from './components/attribute-selector/attribute-selector.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { PatternEditorComponent } from './pages/pattern-editor/pattern-editor.component';
import { PatternStepComponent } from './components/pattern-step/pattern-step.component';
import { PatternCreationDialogComponent } from './components/pattern-creation-dialog/pattern-creation-dialog.component';
import { ModalInputTextConfirmComponent } from './components/modal-input-text-confirm/modal-input-text-confirm.component';
import { TestPanelComponent } from './components/test-panel/test-panel.component';
import { DemoV2HomeComponent } from './pages/demo-v2-home/demo-v2-home.component';
import { UmlToCiWorkflowComponent } from './pages/uml-to-ci-workflow/uml-to-ci-workflow.component';
import { CiToPledWorkflowComponent } from './pages/ci-to-pled-workflow/ci-to-pled-workflow.component';
import { WorkflowSidenavComponent } from './components/workflow-sidenav/workflow-sidenav.component';
import { WorkflowHeaderComponent } from './components/workflow-header/workflow-header.component';
import { WfSelectUmlComponent } from './components/wf-select-uml/wf-select-uml.component';
import { WorkflowSidenavElementComponent } from './components/workflow-sidenav-element/workflow-sidenav-element.component';
import { WfSelectObjComponent } from './components/wf-select-obj/wf-select-obj.component';
import { WfEnrichObjComponent } from './components/wf-enrich-obj/wf-enrich-obj.component';
import { WfGenerateCiComponent } from './components/wf-generate-ci/wf-generate-ci.component';

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
    AssistantsComponent,
    ThreadsComponent,
    FilesComponent,
    HomeComponent,
    AssistantEditionDialogComponent,
    DemoComponent,
    AttributeSelectorComponent,
    PatternsComponent,
    PatternEditorComponent,
    PatternStepComponent,
    PatternCreationDialogComponent,
    ModalInputTextConfirmComponent,
    TestPanelComponent,
    DemoV2HomeComponent,
    UmlToCiWorkflowComponent,
    CiToPledWorkflowComponent,
    WorkflowSidenavComponent,
    WorkflowHeaderComponent,
    WfSelectUmlComponent,
    WorkflowSidenavElementComponent,
    WfSelectObjComponent,
    WfEnrichObjComponent,
    WfGenerateCiComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, SharedModule],
})
export class ChatModule {}
