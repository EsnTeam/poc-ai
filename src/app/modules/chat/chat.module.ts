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
  ],
  imports: [CommonModule, ChatRoutingModule, SharedModule],
})
export class ChatModule {}
