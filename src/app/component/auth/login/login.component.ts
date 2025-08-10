import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = '';
  carregando: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  fazerLogin(): void {
    if (!this.email || !this.senha) {
      this.erro = 'Por favor, preencha todos os campos';
      return;
    }

    this.carregando = true;
    this.erro = '';

    this.authService.login(this.email, this.senha).subscribe({
      next: (resposta) => {
        this.carregando = false;
        if (resposta?.token) {
          this.authService.salvarToken(resposta.token);
          this.router.navigate(['/home']);
        } else {
          this.erro = 'Resposta inválida do servidor';
        }
      },
      error: (erro) => {
        this.carregando = false;
        console.error('Erro no login:', erro);
        
        if (erro.error?.erro) {
          this.erro = erro.error.erro;
        } else if (erro.status === 401) {
          this.erro = 'Email ou senha incorretos';
        } else if (erro.status === 500) {
          this.erro = 'Erro no servidor. Tente novamente.';
        } else {
          this.erro = 'Erro ao conectar com o servidor';
        }
      }
    });
  }
}