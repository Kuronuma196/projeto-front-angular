import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  product: Product = {
    proNome: '',
    proPrecoCusto: 0,
    proPrecoVenda: 0,
    quantidadeEstoque: 0,
    categoria: '',
    codigoBarras: '',
    marca:'',
    unidadeMedida:'',
    ativo: true,
    dataCadastro:'',
    dataAtualizacao:'',
  }

  //importando productService
  constructor(private productService: ProductService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products/create'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }  
}
