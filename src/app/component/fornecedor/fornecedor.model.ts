export interface Fornecedor{
    forId?: number
    forNomeFantasia:string
    forCnpj: string
    forRazaoSocial:string
    contato: Contato;
    endereco: Endereco;
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