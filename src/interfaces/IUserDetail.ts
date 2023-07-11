import { IControleResponse } from "./IBadRequestResponse";
import { TipoPessoa } from "./ICliente";
import { IProduto } from "./IProduto";

export interface IUserDetailResponse {
    detalhe: IDetalheUsuario;
    controle: IControleResponse;
}

export interface IDetalheUsuario {
    usuario: IUsuario;
    clientes: ICliente[];
    produtos: Produto[];
}
export interface IUsuario {
    idUsuario: number;
    nomeUsuario: string;
    emailUsaurio: string;
}
export interface ICliente {
    cliente: ClienteDetalhe;
    tipoAcesso: {
        id: number;
        descricao: string;
    };
    acessoPrincipal: boolean;
    primeiroAcesso: boolean;
    dataUltimoAcesso?: Date;
    dataInativacao: Date | null;
    dataCadastro: Date;
}

export interface ClienteDetalhe {
    idCliente: number;
    nome: string;
    inscricao: string;
    tipoPessoa: TipoPessoa;
    ativo: boolean;
    logo: string;
}

export interface Produto {
    produto: IProduto;
    id: number;
    ativo: boolean;
    bloqueado: boolean;
    dataCriacao: Date;
    idUsuario: number;
}
