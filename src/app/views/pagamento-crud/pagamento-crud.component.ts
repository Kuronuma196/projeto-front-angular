import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagamento-crud',
  templateUrl: './pagamento-crud.component.html',
  styleUrls: ['./pagamento-crud.component.css']
})
export class PagamentoCrudComponent implements OnInit {
  constructor(private router: Router){ }

  ngOnInit(): void{

  }

  navigateToPagamentoCreate(): void{
    this.router.navigate(['formaPagamento/create'])
  }

}