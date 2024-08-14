import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { AssistantsComponent } from './pages/assistants/assistants.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { FilesComponent } from './pages/files/files.component';
import { HomeComponent } from './pages/home/home.component';

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

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
