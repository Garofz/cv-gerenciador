export interface ICliente{
    id: number;
    nome: string;
    inscricao: string;
    tipoPessoa: "PF"|"PJ";
    ativo: boolean;
    logo: string;
}