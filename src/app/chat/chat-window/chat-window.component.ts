import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Usuario } from '../../services/user.service';
import { Mensagem, Message } from '../../models/message.model'; // Import from model file

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnChanges {
 
  @Input() contato?: Usuario;
  mensagens: Mensagem[] = [];
  novaMensagem: string = '';

  constructor(private readonly chatService: ChatService) {}

  ngsOnChanges(changes: SimpleChanges): void {
    if (changes['contato'] && this.contato) {
      this.carregarMensagens();
    }
  }

  carregaMensagens(): void {
    if (!this.contato) return;
    this.chatService.getMessages(this.contato.id).subscribe({
      next: msgs => {
        this.mensagens = msgs.map((msg: any) => ({
          id: msg.id,
          remetenteId: msg.remetenteId,
          destinatarioId: msg.destinatarioId,
          texto: msg.texto ?? msg.content ?? '',
          dataHora: msg.dataHora ?? msg.timestamp
        }));
      },
      error: err => console.error('Erro ao carregar mensagens', err)
    });
  }

  enviaMensagem(): void {
    if (!this.contato || !this.novaMensagem.trim()) return;

    this.chatService.enviarMensagem(this.contato.id.toString(), this.novaMensagem.trim()).subscribe({
      next: msg => {
        this.mensagens.push(msg);
        this.novaMensagem = '';
      },
      error: err => console.error('Erro ao enviar mensagem', err)
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contato'] && this.contato) {
      this.carregarMensagens();
    }
  }

  carregarMensagens(): void {
    if (!this.contato) return;
    
    this.chatService.getMessages(this.contato.id).subscribe({
      next: (msgs: any[]) => {
        this.mensagens = msgs.map(msg => this.mapToMessage(msg));
      },
      error: err => console.error('Erro ao carregar mensagens', err)
    });
  }

  enviarMensagem(): void {
    if (!this.contato || !this.novaMensagem.trim()) return;

    this.chatService.enviarMensagem(this.contato.id.toString(), this.novaMensagem.trim()).subscribe({
      next: (msg: any) => {
        this.mensagens.push(this.mapToMessage(msg));
        this.novaMensagem = '';
      },
      error: err => console.error('Erro ao enviar mensagem', err)
    });
  }

  // Helper to ensure consistent message formatting
  private mapToMessage(msg: any): Message {
    return {
      id: msg.id,
      remetenteId: msg.remetenteId,
      destinatarioId: msg.destinatarioId,
      texto: msg.texto || msg.text || msg.conteudo || '',
      dataHora: msg.dataHora ? new Date(msg.dataHora) : new Date()
    };
  }
}