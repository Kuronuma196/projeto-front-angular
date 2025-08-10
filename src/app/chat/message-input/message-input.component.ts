import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
  message: string = '';

  @Output() messageSend = new EventEmitter<string>();
  chatService: any;

// ...

ngOnInit() {
  this.chatService.getMessages().subscribe({
    next: (msgs: any[]) => this.mensagens = msgs.map(msg => ({
      id: msg.id,
      remetenteId: msg.remetenteId,
      destinatarioId: msg.destinatarioId,
      texto: msg.texto,
      dataHora: new Date(msg.dataHora)
    })),
    error: (err: any) => console.error(err)
  });
}

sendMessage() {
  const newMsg: Message = {
    id: Date.now(),
    remetenteId: this.currentUser.id,
    destinatarioId: this.contato.id,
    texto: this.newMessage,
    dataHora: new Date()
  };
  
  this.mensagens.push(newMsg); // Now matches Message type
}
}
export interface Message {
  id: any;
  remetenteId: any;       // Changed from senderId
  destinatarioId: any;    // Changed from receiverId
  texto: string;          // Changed from content
  dataHora: Date;         // Changed from timestamp
}

 export interface Usuario {
  id: any;
  nome: string;
  avatar?: string;
  online: boolean;                   // Added missing property
  ultimaMensagem?: {                 // Added missing property
    texto: string;
    hora: Date;
  };
}