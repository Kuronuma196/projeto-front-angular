import { Component, OnInit } from '@angular/core';
import { UserService, Usuario } from '../../services/user.service';
import { Router } from '@angular/router'; // Add for better navigation

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  usuario?: Usuario | null;

  constructor(
    private usuarioService: UserService,
    private router: Router // Add for navigation
  ) {}

  ngOnInit(): void {
    try {
      this.usuario = this.usuarioService.getUsuarioLogado();
    } catch (error) {
      console.error('Failed to get logged-in user', error);
      this.usuario = null;
    }
  }

  abrirConfiguracoes(): void {
    console.log('Abrindo configurações...');
    // Consider using router navigation instead
    // this.router.navigate(['/settings']);
  }

  logout(): void {
    try {
      this.usuarioService.logout();
      // Use Angular Router instead of reload
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
}