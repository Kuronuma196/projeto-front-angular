import { Component } from '@angular/core';
import { Pagamento } from '../pagamento.model';
import { PagamentoService } from '../pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-update',
  templateUrl: './pagamento-update.component.html',
  styleUrls: ['./pagamento-update.component.css']
})
export class PagamentoUpdateComponent {
  pagamento!: Pagamento;

  constructor(private pagamentoService: PagamentoService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pagamentoService.readById(id!).subscribe((pagamento: Pagamento) =>{
      this.pagamento = pagamento
    })
  }

  updatePagamento(): void {
    this.pagamentoService.update(this.pagamento).subscribe(() => {
      this.pagamentoService.showMessage('Pagamento atualizado com sucesso!')
      this.router.navigate(['/formaPagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento'])
  }
}
