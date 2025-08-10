import { Component } from '@angular/core';
import { Message } from 'src/app/services/chat.service';
import { Usuario } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  contatoSelecionadoId: number | null = null;
  mensagens: Message[] = [];

  selecionarContato(contatoId: number) {
    this.contatoSelecionadoId = contatoId;
  }
contatoSelecionado?: Usuario;

  selecionarContatos(contato: Usuario) {
    this.contatoSelecionado = contato;
  }
  carregarMensagens(mensagens: Message[]) {
    this.mensagens = mensagens;
  }

  adicionarMensagem(mensagem: Message) {
    this.mensagens.push(mensagem);
  }
}
