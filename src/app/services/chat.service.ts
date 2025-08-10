import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
export { Message } from '../models/message.model';// Use centralized model

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly apiUrl = 'http://localhost:8080/api/messages';

  constructor(private readonly http: HttpClient) {}

  getMessages(userId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/${userId}`);
  }

  enviarMensagem(userId: string, text: string): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, {
      destinatarioId: userId,
      texto: text
    });
  }
}