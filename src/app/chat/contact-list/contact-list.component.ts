import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../services/user.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contatos: Usuario[] = []; // Simule dados aqui se desejar testar
  contatoSelecionado?: Usuario;

  @Output() contatoSelecionadoChange = new EventEmitter<Usuario>();

  selecionarContato(contato: Usuario): void {
    this.contatoSelecionado = contato;
    this.contatoSelecionadoChange.emit(contato);
  }

  @Output() contatoSelecionados = new EventEmitter<Usuario>();

  contacts: Usuario[] = [
    {
      id: 1, nome: 'Alice',
      online: false
    },
    {
      id: 2, nome: 'Bob',
      online: false
    },
    {
      id: 3, nome: 'Carol',
      online: false
    }
  ];

  selecionar(contato: Usuario) {
    this.contatoSelecionados.emit(contato);
  }
}
