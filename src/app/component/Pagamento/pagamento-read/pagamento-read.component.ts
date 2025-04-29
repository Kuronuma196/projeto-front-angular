import { Component } from '@angular/core';
import { Pagamento } from '../pagamento.model';
import { PagamentoService } from '../pagamento.service';

@Component({
  selector: 'app-pagamento-read',
  templateUrl: './pagamento-read.component.html',
  styleUrls: ['./pagamento-read.component.css']
})
export class PagamentoReadComponent {
  pagamento!: Pagamento[]
  displayedColumns = [ 'fpgId', 'fpgNome', 'fpgPrice', 'fpgDescricao']

  constructor(private pagamentoService: PagamentoService) { }

  ngOnInit(): void {
    this.pagamentoService.read().subscribe(pagamento => {
      this.pagamento = pagamento
      console.log(pagamento)  
    })
  }
}
