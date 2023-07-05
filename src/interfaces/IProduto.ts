import { IControleResponse } from "./IBadRequestResponse";

export interface IProdutoResponse {
    produtos: IProduto[];
    controle: IControleResponse;
}

export interface IProduto {
    idProduto: number;
    descricao: string;
    nome: string;
    ativo: boolean;
}
