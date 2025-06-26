import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PesquisaService {
  private apiUrl = 'http://localhost:8080/api/pesquisa';

  constructor(private http: HttpClient) {}

  pesquisar(pergunta: string): Observable<{ resposta: string }> {
    return this.http.post<{ resposta: string }>(this.apiUrl, { pergunta });
  }
}