export interface Cliente {
  cliId?: number;
  cliNome: string;
  cliCpf: string;
  contato: Contato;
  endereco: Endereco;
  tipoUsuario?: string;  // adiciona aqui
}

export interface Contato {
  telefone: string;
  email: string;
}

export interface Endereco {
  rua: string;
  numero: string;
  cidade: string;
  estado: string;
  cep: string;
}
