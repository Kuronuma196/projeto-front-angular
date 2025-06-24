export interface Pagamento{
    fpgId?: number
    fpgNome: string
    fpgPrice: number | null
    fpgDescricao: string
    ativo: string
    permiteParcelamento: string
    numeroMaximoParcelas: number | null
    taxaAdicional: string
}