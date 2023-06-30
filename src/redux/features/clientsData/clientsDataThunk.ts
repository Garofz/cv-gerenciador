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

export const getClients = createAsyncThunk(
    "clientsData/getClients",
    async (
        args: {
            token: string;
        },
        { fulfillWithValue, rejectWithValue }
    ): Promise<ICliente | any> => {
        try {
            const response = await MiddlewareAPI.get<IClienteResponse>(
                "cardapioVirtual/clientes",
                {
                    headers: {
                        Authorization: args.token,
                    },
                }
            );

            return fulfillWithValue(response.data.clientes);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const addClient = createAsyncThunk(
    "clientsData/addClient",
    async (
        args: {
            cliente: IClienteRequest;
        },
        { fulfillWithValue, rejectWithValue }
    ): Promise<ICliente | any> => {
        try {
            const response = await MiddlewareAPI.post<IClienteResponse>(
                "cardapioVirtual/cliente",
                { ...args.cliente }
            );

            return fulfillWithValue(response.data.clientes);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const editarClient = createAsyncThunk(
    "clientsData/editarClient",
    async (
        args: {
            cliente: IClienteRequest;
        },
        { fulfillWithValue, rejectWithValue }
    ): Promise<ICliente | any> => {
        try {
            const response = await MiddlewareAPI.put<IClienteResponse>(
                "cardapioVirtual/cliente",
                { ...args.cliente }
            );

            return fulfillWithValue(response.data.clientes);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
