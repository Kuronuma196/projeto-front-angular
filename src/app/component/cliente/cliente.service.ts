import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/clientes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cliente: Cliente): Observable<Cliente> {
    const clienteDTO = this.toDTO(cliente);
    return this.http.post<Cliente>(this.baseUrl, clienteDTO);
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  readById(cliId: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliId}`;
    return this.http.get<Cliente>(url);
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.cliId}`;
    return this.http.put<Cliente>(url, cliente);
  }

  delete(cliId: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliId}`;
    return this.http.delete<Cliente>(url);
  }

  private toDTO(cliente: Cliente) {
    return {
      cliNome: cliente.cliNome,
      cliCpf: cliente.cliCpf,
      endRua: cliente.endereco.rua,
      endNumero: cliente.endereco.numero,
      endCidade: cliente.endereco.cidade,
      endEstado: cliente.endereco.estado,
      endCep: cliente.endereco.cep,
      conEmail: cliente.contato.email,
      conTelefoneComercial: cliente.contato.telefone,
      tipoUsuario: 'CLIENTE'  // campo fixo enviado para backend
    };
  }
}
