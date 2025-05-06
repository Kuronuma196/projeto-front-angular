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

  //construtor onde injetamos o MatSnackBar e HttpClient;
  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
//método para 
create(cliente: Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.baseUrl, cliente)
}

//método para carregar os dados do produto
  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
  }
//método para carregar os dados do produto por id
  readById(cliId: string): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliId}`
    return this.http.get<Cliente>(url)
  }
//método para atualizar os dados do produto
  update(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliente.cliId}`
    return this.http.delete<Cliente>(url)
  }
//método para deletar os dados do produto
  delete(cliId: number): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliId}`
    return this.http.delete<Cliente>(url)
  }
}
