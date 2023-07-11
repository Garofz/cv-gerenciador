import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    ICliente,
    IClienteRequest,
    IClienteResponse,
} from "../../../interfaces/ICliente";
import { IUsuario } from "../../../interfaces/IUsuario";
import { MiddlewareAPI } from "../../../config/api";
import { AxiosResponse } from "axios";
import { IBadRequestResponse } from "../../../interfaces/IBadRequestResponse";
import {
    IUserClienteResponse,
    IUserListResponse,
} from "../../../interfaces/IUserClienteResponse";
import { IUserDetailResponse } from "../../../interfaces/IUserDetail";

export const getClients = createAsyncThunk(
    "clientsData/getClients",
    async (args: { token: string }): Promise<ICliente | any> => {
        try {
            const response = await MiddlewareAPI.get(
                "cardapioVirtual/clientes",
                {
                    headers: {
                        Authorization: args.token,
                    },
                }
            );
            if (response.data.error !== undefined) return response.data;

            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);

export const addClient = createAsyncThunk(
    "clientsData/addClient",
    async (args: { cliente: IClienteRequest }): Promise<ICliente | any> => {
        try {
            const response = await MiddlewareAPI.post(
                "cardapioVirtual/cliente",
                { ...args.cliente }
            );
            if (response.data.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);

export const editarClient = createAsyncThunk(
    "clientsData/editarClient",
    async (args: { cliente: IClienteRequest }): Promise<ICliente | any> => {
        try {
            const response = await MiddlewareAPI.put(
                "cardapioVirtual/cliente",
                { ...args.cliente }
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.repsonse;
        }
    }
);

export const consultaUsuariosCliente = createAsyncThunk(
    "clientsData/consultaUsuariosCliente",
    async (args: {
        idCliente: number;
    }): Promise<IUserClienteResponse | any> => {
        try {
            const response = await MiddlewareAPI.get(
                `cardapioVirtual/cliente/${args.idCliente}/usuarios`
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.repsonse;
        }
    }
);

export const consultaUsuarios = createAsyncThunk(
    "clientsData/consultaUsuarios",
    async (args): Promise<IUserListResponse | any> => {
        try {
            const response = await MiddlewareAPI.get(
                `cardapioVirtual/usuarios`
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);

export const cadastrarUsuarios = createAsyncThunk(
    "clientsData/consultaUsuarios",
    async (args: {
        nomeUsuario: string;
        email: string;
        token: string;
    }): Promise<IUserListResponse | any> => {
        try {
            const response = await MiddlewareAPI.post(
                `authschema/usuario`,
                args
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);

export const getProducts = createAsyncThunk(
    "clientsData/getProducts",
    async (args: { token: string }): Promise<ICliente | any> => {
        try {
            const response = await MiddlewareAPI.get(
                "cardapioVirtual/produtos",
                {
                    headers: {
                        Authorization: args.token,
                    },
                }
            );
            if (response.data.error !== undefined) return response.data;

            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);

export const getUserDetail = createAsyncThunk(
    "clientsData/getUserDetail",
    async (args: {
        idUsuario: number;
        token: string;
    }): Promise<IUserDetailResponse | any> => {
        try {
            const response = await MiddlewareAPI.get(
                `cardapioVirtual/usuario/detalhe/${args.idUsuario}`,
                {
                    headers: {
                        Authorization: `Bearer ${args.token}`,
                    },
                }
            );
            if (response.data.error !== undefined) return response.data;

            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);

export const cadastrarClienteUsuario = createAsyncThunk(
    "clientsData/cadastrarClienteUsuario",
    async (args: {
        idUsuario: number;
        idCliente: number;
        acessoPrincipal: boolean;
        idTipoAcesso: number;
        dataInativacaoAcesso: string | null;
        token: string;
    }): Promise<IUserListResponse | any> => {
        try {
            const response = await MiddlewareAPI.post(
                `cardapioVirtual/usuario/cliente`,
                {
                    idUsuario: args.idUsuario,
                    idCliente: args.idCliente,
                    acessoPrincipal: args.acessoPrincipal,
                    idTipoAcesso: args.idTipoAcesso,
                    token: args.token,
                    dataInativacaoAcesso: args.dataInativacaoAcesso
                        ? new Date(args.dataInativacaoAcesso)
                        : null,
                }
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);
export const editarClienteUsuario = createAsyncThunk(
    "clientsData/editarClienteUsuario",
    async (args: {
        idUsuario: number;
        idCliente: number;
        acessoPrincipal: boolean;
        idTipoAcesso: number;
        dataInativacaoAcesso: string | null;
        token: string;
    }): Promise<IUserListResponse | any> => {
        try {
            const response = await MiddlewareAPI.put(
                `cardapioVirtual/usuario/cliente`,
                {
                    idUsuario: args.idUsuario,
                    idCliente: args.idCliente,
                    acessoPrincipal: args.acessoPrincipal,
                    idTipoAcesso: args.idTipoAcesso,
                    token: args.token,
                    dataInativacaoAcesso: args.dataInativacaoAcesso
                        ? new Date(args.dataInativacaoAcesso)
                        : null,
                }
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);

export const cadastrarAcessoUsuario = createAsyncThunk(
    "clientsData/cadastrarAcessoUsuario",
    async (args: {
        userId: number;
        productId: number;
        password: string;
        token: string;
    }): Promise<IUserListResponse | any> => {
        try {
            const response = await MiddlewareAPI.post(
                `authschema/usuario/accessKey`,
                {
                    userId: args.userId,
                    productId: args.productId,
                    password: args.password,
                    token: args.token,
                }
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);

export const editaAcessoUsuario = createAsyncThunk(
    "clientsData/editaAcessoUsuario",
    async (args: {
        userId: number;
        productId: number;
        active: boolean;
        blocked: boolean;
        token: string;
    }): Promise<IUserListResponse | any> => {
        try {
            const response = await MiddlewareAPI.put(
                `authschema/usuario/accessKey`,
                {
                    userId: args.userId,
                    productId: args.productId,
                    active: args.active,
                    blocked: args.blocked,
                    token: args.token,
                }
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);
export const atualizaSenhaUsuario = createAsyncThunk(
    "clientsData/atualizaSenhaUsuario",
    async (args: {
        userId: number;
        productId: number;
        password: string;
        token: string;
    }): Promise<IUserListResponse | any> => {
        try {
            const response = await MiddlewareAPI.post(
                `authschema/usuario/novaSenha`,
                {
                    userId: args.userId,
                    productId: args.productId,
                    newpassword: args.password,
                    token: args.token,
                }
            );

            if (response.data?.error !== undefined) return response.data;
            return response.data;
        } catch (err: any) {
            return err.response;
        }
    }
);
