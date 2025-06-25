import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-inicial',
  templateUrl: './app-inicial.component.html',
  styleUrls: ['./app-inicial.component.css']
})
export class AppInicialComponent {
 
  showDropdown: 'areas' | 'sistema' | '' = '';

  constructor(private router: Router) {}

  // Controla exibição do dropdown
  setDropdown(menu: 'areas' | 'sistema' | ''): void {
    this.showDropdown = menu;
  }

  // Navega para rota interna do Angular
  goTo(route: string): void {
    this.router.navigate([route]);
  }

  // Abre links externos (como WhatsApp)
  openExternal(url: string): void {
    window.open(url, '_blank');
  }

  // Exemplo para botão de atendimento
  openAtendimento(): void {
    this.openExternal('https://novo.sistemafiep.org.br/atendimento'); // Substitua pelo canal real
  }

  // Comunidade WhatsApp (QR Code)
  openWhatsapp(): void {
    this.openExternal('https://chat.whatsapp.com/GGLyX5IOsIp3867gIv9yBD'); // Substitua pelo canal real
  }
  trocarCorLogo(cor: 'branca' | 'azul-escuro') {
    const logo = document.querySelector('.logo') as HTMLElement;
    logo.className = 'logo ' + cor;
  }
  
}
