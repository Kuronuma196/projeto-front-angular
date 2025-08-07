import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';


@NgModule({
  declarations: [
    ContactListComponent,
    ChatWindowComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
