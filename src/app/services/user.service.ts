import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

// Consolidated Usuario interface
export interface Usuario {
  id: number;
  nome: string;
  email?: string;
  fotoUrl?: string;
  avatar?: string;
  online: boolean;
  ultimaMensagem?: {
    texto: string;
    hora: Date;
  };
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'http://localhost:8080/users';
  private currentUserSubject = new BehaviorSubject<Usuario | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private readonly http: HttpClient) {
    // Load user from storage on initialization
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        this.currentUserSubject.next(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('currentUser');
      }
    } else {
      // Default user for development
      this.currentUserSubject.next({
        id: 1,
        nome: 'Carlos Eduardo',
        status: 'Online',
        fotoUrl: 'assets/img/perfil-carlos.png',
        online: true
      });
    }
  }

  // API methods
  getContacts(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/contacts`);
  }

  getUserProfile(userId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${userId}`);
  }

  getContatos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  getPerfil(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  // Auth methods
  getUsuarioLogado(): Usuario | null {
    return this.currentUserSubject.value;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    console.log('Usuário deslogado');
  }

  login(credentials: {email: string, password: string}): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/login`, credentials).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      }),
      catchError(error => {
        console.error('Login failed', error);
        throw error;
      })
    );
  }

  // Update user status
  updateStatus(online: boolean): void {
    const currentUser = this.currentUserSubject.value;
    if (currentUser) {
      this.currentUserSubject.next({...currentUser, online});
    }
  }
}