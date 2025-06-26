import { Component } from '@angular/core';
import { PesquisaService } from '../pesquisa.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  pergunta = '';
  resposta = '';
  loading = false;

  constructor(private pesquisaService: PesquisaService) {}

  buscar() {
    if (!this.pergunta.trim()) return;
    this.loading = true;
    this.resposta = '';
    this.pesquisaService.pesquisar(this.pergunta).subscribe({
      next: data => {
        this.resposta = data.resposta;
        this.loading = false;
      },
      error: () => {
        this.resposta = 'Erro ao buscar resposta.';
        this.loading = false;
      }
    });
  }
}
