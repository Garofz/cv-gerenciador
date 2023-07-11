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
    dataInativacao?: Date | null;
    dataCadastro: Date;
}

export interface IUserListResponse {
    usuarios: IUserList[];
    controle: IControleResponse;
}
export interface IUserList {
    idUsuario: number;
    nomeUsuario: string;
    emailUsuario: string;
}
