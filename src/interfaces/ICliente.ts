import { IControleResponse } from "./IBadRequestResponse";

export interface IClienteResponse {
    clientes?: ICliente[];
    cliente?: ICliente;
    controle: IControleResponse;
}

export interface IClienteRequest {
    idCliente: number;
    nome: string;
    inscricao: string;
    idtipoPessoa: number;
    ativo: boolean;
    logo: string;
    usuarioInclusao?: number;
    usuarioAlteracao?: number;
}

export interface ICliente {
    idCliente: number;
    nome: string;
    inscricao: string;
    tipoPessoa: TipoPessoa;
    ativo: boolean;
    logo: string;
    usuarioInclusao?: UsuarioInclusao;
    usuarioAlteracao?: UsuarioAlteracao;
}

export interface TipoPessoa {
    idTipoPessoa: number;
    descricao: string;
}

export interface UsuarioInclusao {
    idUsuario: number;
    nome: string;
    email: string;
    dataInclusao: Date;
}
export interface UsuarioAlteracao {
    idUsuario: number;
    nome: string;
    email: string;
    dataInclusao: Date;
}

export interface Controle {
    prefix: string;
    message: string;
}
