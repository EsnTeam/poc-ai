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

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
