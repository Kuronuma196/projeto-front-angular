import { Component, OnInit  } from '@angular/core';
import { Pagamento } from '../pagamento.model';
import { PagamentoService } from '../pagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-create',
  templateUrl: './pagamento-create.component.html',
  styleUrls: ['./pagamento-create.component.css']
})
export class PagamentoCreateComponent {

  pagamento: Pagamento = {
    fpgNome: '',
    fpgPrice: 0,
    fpgDescricao: '',
    ativo: '',
    permiteParcelamento: '',
    numeroMaximoParcelas: 0,
    taxaAdicional: ''
  }

  //importando productService
  constructor(private pagamentoService: PagamentoService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createPagamento(): void {
    this.pagamentoService.create(this.pagamento).subscribe(() => {
      this.pagamentoService.showMessage('Pagamento Registrado!')
      this.router.navigate(['/formaPagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento'])
  }  
}