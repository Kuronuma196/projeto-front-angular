import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "http://localhost:8080/produtos"

  //construtor onde injetamos o MatSnackBar e HttpClient;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  //método para 
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  //método para carregar os dados do produto
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  //método para carregar os dados do produto por id
  readById(proId: string): Observable<Product> {
    const url = `${this.baseUrl}/${proId}`
    return this.http.get<Product>(url)
  }
  //método para atualizar os dados do produto
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.proId}`
    return this.http.put<Product>(url, product)
  }

  //método para deletar os dados do produto
  delete(proId: number): Observable<Product>{    
    const url = `${this.baseUrl}/${proId}`
    return this.http.delete<Product>(url)
  }

}
