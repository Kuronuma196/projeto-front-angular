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

  mensagemUsuario: string = '';
  historicoMensagens: { autor: 'usuario' | 'sistema', texto: string }[] = [];
  loading = false;

  constructor(private router: Router, private pesquisaService: PesquisaService) {}

  enviarMensagem() {
    const pergunta = this.mensagemUsuario.trim();
    if (!pergunta) return;

    this.historicoMensagens.push({ autor: 'usuario', texto: pergunta });
    this.mensagemUsuario = '';
    this.loading = true;

    this.pesquisaService.pesquisar(pergunta).subscribe({
      next: (res) => {
        this.historicoMensagens.push({
          autor: 'sistema',
          texto: res.resposta || 'Nenhuma resposta encontrada.'
        });
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar resposta:', err);
        this.historicoMensagens.push({
          autor: 'sistema',
          texto: 'Erro ao buscar resposta da web.'
        });
        this.loading = false;
      }
    });
  }

  openAtendimento() {
    this.enviarMensagem();
  }

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

 

}
