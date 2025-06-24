export interface Product{
    proId?: number
    proNome: string
    proPrecoCusto: number | null
    proPrecoVenda: number | null
    quantidadeEstoque: number | null
    categoria: string
    codigoBarras: string
    marca:string
    unidadeMedida:string
    ativo:boolean 
    dataCadastro:string
    dataAtualizacao:string
    proFornecedor: number | null
}