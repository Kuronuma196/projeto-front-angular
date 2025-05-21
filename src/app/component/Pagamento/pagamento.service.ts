import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from './pagamento.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  baseUrl = "http://localhost:8080/formaPagamento"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(pagamento: Pagamento): Observable<Pagamento>{
    return this.http.post<Pagamento>(this.baseUrl, pagamento)
  }

  read(): Observable<Pagamento[]>{
    return this.http.get<Pagamento[]>(this.baseUrl)
  }

  readById(id: string): Observable<Pagamento>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Pagamento>(url)
  }

  update(pagamento: Pagamento): Observable<Pagamento>{
    const url = `${this.baseUrl}/${pagamento.fpgId}`
    return this.http.put<Pagamento>(url,pagamento)
  }

  delete(id: number): Observable<Pagamento>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Pagamento>(url)
  }
}
