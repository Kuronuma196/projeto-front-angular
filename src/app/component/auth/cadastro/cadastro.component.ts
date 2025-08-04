import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  tipo: string = '';

  erro: string = '';
  sucesso: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  cadastrar(): void {
    if (!this.nome || !this.email || !this.senha || !this.tipo) {
      this.erro = 'Por favor, preencha todos os campos.';
      this.sucesso = '';
      return;
    }

    const usuario: {
      nome: string;
      email: string;
      senha: string;
      tipo: string;
    } = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      tipo: this.tipo
    };

    this.authService.cadastrar(usuario).subscribe({
      next: () => {
        this.sucesso = 'Cadastro realizado com sucesso! Você será redirecionado para o login.';
        this.erro = '';

        // Aguarda 2 segundos e redireciona para login
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },error: (err: any) => {
  this.erro = 'Erro ao cadastrar. Verifique os dados e tente novamente.';
  this.sucesso = '';

  if (err) {
    try {
      console.error('Erro ao fazer cadastro:', typeof err === 'object' ? JSON.stringify(err) : err);
    } catch (e) {
      console.error('Erro ao fazer cadastro: erro inesperado', e);
    }
  } else {
    console.error('Erro ao fazer cadastro: erro desconhecido');
  }
}

    });
  }

  voltarParaLogin(): void {
    this.router.navigate(['/login']);
  }
}
