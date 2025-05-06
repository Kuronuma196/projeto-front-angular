import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { fornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent {

  fornecedor!: Fornecedor[]
  displayedColumns = ['forId', 'forNomeFantasia', 'forCnpj','forRazaoSocial', 'action']

  constructor(private fornecedorService: fornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedor => {
      this.fornecedor = fornecedor
      console.log(fornecedor)  
    })
  }

}
