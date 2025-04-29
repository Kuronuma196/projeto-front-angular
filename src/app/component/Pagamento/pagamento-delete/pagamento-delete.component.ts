import { Component } from '@angular/core';
import { Pagamento } from '../pagamento.model';
import { PagamentoService } from '../pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-delete',
  templateUrl: './pagamento-delete.component.html',
  styleUrls: ['./pagamento-delete.component.css']
})
export class PagamentoDeleteComponent {
  pagamento!: Pagamento;

  constructor(
    private pagamentoService: PagamentoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const fpgId = this.route.snapshot.paramMap.get('fpgId');
    this.pagamentoService.readById(fpgId!).subscribe(pagamento =>{
      this.pagamento = pagamento
    })
  }

  deletePagamento(): void {
    this.pagamentoService.delete(this.pagamento.fpgId!).subscribe(() =>{
    this.pagamentoService.showMessage('Pagamento excluido com sucesso!')  
    this.router.navigate(['/formaPagamento'])
    })
  }

  cancel(): void{
    this.router.navigate(['/formaPagamento'])
  }

}
