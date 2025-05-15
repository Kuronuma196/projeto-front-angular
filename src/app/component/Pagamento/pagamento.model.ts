export interface Pagamento{
    fpgId?: number
    fpgNome: string
    fpgPrice: number
    fpgDescricao: string
    ativo: string
    permiteParcelamento: string
    numeroMaximoParcelas: number
    taxaAdicional: string
}