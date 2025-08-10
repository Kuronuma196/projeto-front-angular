import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from '../../chat/contact-list/contact-list.component';
import { ChatWindowComponent } from '../../chat/chat-window/chat-window.component';
import { ProfileCardComponent } from '../../chat/profile-card/profile-card.component';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactListComponent,
    ChatWindowComponent,
    ProfileCardComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChatComponent] // Export if needed by other modules
})
export class ChatModule { }