import { IControleResponse } from "./IBadRequestResponse";

export interface IUserClienteResponse {
    usuarios: IUserCliente[];
    controle: IControleResponse;
}

export interface IUserCliente {
    id: number;
    nome: string;
    email: string;
    tipoAcesso: {
        id: number;
        descricao: string;
    };
    acessoPrincipal: boolean;
    pimeiroAcesso: boolean;
    dataUltimoAcesso?: Date;
    dataInativacao?: Date;
    dataCadastro: Date;
}
