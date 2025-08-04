import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

 login(email: string, senha: string): Observable<LoginResponse> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  return this.http.post<LoginResponse>(
    `${this.API}/login`, 
    { email, senha }, 
    { headers }
  );
}
  cadastrar(usuario: any): Observable<any> {
    return this.http.post(`${this.API}/cadastro`, usuario);
  }

  salvarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && token !== '';
  }
}
