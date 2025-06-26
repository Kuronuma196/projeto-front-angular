import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PesquisaService } from 'src/app/component/chatbot1/pesquisa.service';// ajuste o caminho conforme o projeto


@Component({
  selector: 'app-app-inicial',
  templateUrl: './app-inicial.component.html',
  styleUrls: ['./app-inicial.component.css']
})
export class AppInicialComponent {
 
  
  showDropdown: 'areas' | 'sistema' | '' = '';

  mensagemUsuario = '';
  respostaPesquisa = '';
  loading = false;
  historicoMensagens: { autor: 'usuario' | 'sistema', texto: string }[] = [];

  constructor(private router: Router, private pesquisaService: PesquisaService) {}

  setDropdown(menu: 'areas' | 'sistema' | ''): void {
    this.showDropdown = menu;
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  }

  openExternal(url: string): void {
    window.open(url, '_blank');
  }

  openWhatsapp(): void {
    this.openExternal('https://chat.whatsapp.com/GGLyX5IOsIp3867gIv9yBD');
  }

  trocarCorLogo(cor: 'branca' | 'azul-escuro') {
    const logo = document.querySelector('.logo') as HTMLElement;
    logo.className = 'logo ' + cor;
  }

  enviarMensagem() {
    const pergunta = this.mensagemUsuario.trim();
    if (!pergunta) return;

    this.loading = true;
    this.respostaPesquisa = '';
    this.historicoMensagens.push({ autor: 'usuario', texto: pergunta });

    this.pesquisaService.pesquisar(pergunta).subscribe({
      next: data => {
        this.respostaPesquisa = data.resposta;
        this.historicoMensagens.push({ autor: 'sistema', texto: data.resposta });
        this.loading = false;
        this.mensagemUsuario = '';
      },
      error: () => {
        const erroMsg = 'Erro ao buscar resposta.';
        this.respostaPesquisa = erroMsg;
        this.historicoMensagens.push({ autor: 'sistema', texto: erroMsg });
        this.loading = false;
      }
    });
  }

  openAtendimento() {
    const mensagem = this.mensagemUsuario.trim();
    if (!mensagem) return;

    this.historicoMensagens.push({ autor: 'usuario', texto: mensagem });
    this.mensagemUsuario = '';
  }
}
