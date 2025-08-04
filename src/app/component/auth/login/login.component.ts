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

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin(): void {
    this.erro = ''; // limpa erro anterior

    this.authService.login(this.email, this.senha).subscribe({
      next: (res) => {
        this.authService.salvarToken(res.token);
        this.router.navigate(['/home']); // ajuste a rota conforme necessário
      },
      error: (err: any) => {
  this.erro = 'Email ou senha inválidos';
  try {
  const mensagemErro = typeof err === 'object' && err !== null && 'error' in err
    ? err.error
    : err;
  console.error('Erro ao fazer login:', mensagemErro);
} catch (e) {
  console.error('Erro ao fazer login: erro desconhecido', e);
}

}



    });
  }
}
