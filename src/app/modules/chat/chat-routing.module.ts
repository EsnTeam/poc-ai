import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { AssistantsComponent } from './pages/assistants/assistants.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { FilesComponent } from './pages/files/files.component';
import { HomeComponent } from './pages/home/home.component';
import { DemoComponent } from './pages/demo/demo.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { PatternEditorComponent } from './pages/pattern-editor/pattern-editor.component';
import { DemoV2HomeComponent } from './pages/demo-v2-home/demo-v2-home.component';
import { UmlToCiWorkflowComponent } from './pages/uml-to-ci-workflow/uml-to-ci-workflow.component';
import { WfSelectUmlComponent } from './components/wf-select-uml/wf-select-uml.component';
import { WfSelectObjComponent } from './components/wf-select-obj/wf-select-obj.component';
import { WfEnrichObjComponent } from './components/wf-enrich-obj/wf-enrich-obj.component';
import { WfGenerateCiComponent } from './components/wf-generate-ci/wf-generate-ci.component';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [],
  },
  {
    path: 'assistants',
    component: AssistantsComponent,
    children: [],
  },

  {
    path: 'preview',
    component: FormPreviewComponent,
    children: [],
  },

  {
    path: 'threads',
    component: ThreadsComponent,
    children: [],
  },
  {
    path: 'threads/:threadId/chat',
    component: ChatComponent,
    children: [],
  },
  {
    path: 'files',
    component: FilesComponent,
    children: [],
  },
  {
    path: 'patterns',
    component: PatternsComponent,
    children: [],
  },
  {
    path: 'patterns/:patternId',
    component: PatternEditorComponent,
    children: [],
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [],
  },

  {
    path: 'demo-v2/uml-to-ci/:sessionId',
    component: UmlToCiWorkflowComponent,
    children: [],
  },

  {
    path: 'demo-v2/home',
    component: DemoV2HomeComponent,
    children: [],
  },
  { path: 'demo-v2', redirectTo: 'demo-v2/home', pathMatch: 'full' },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
