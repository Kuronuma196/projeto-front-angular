import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  trocarCorLogo(cor: 'branca' | 'azul-escuro') {
    const logo = document.querySelector('.logo') as HTMLElement;
    logo.className = 'logo ' + cor;
  }
}
