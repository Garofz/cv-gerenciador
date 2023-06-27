import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICliente, IClienteResponse } from "../../../interfaces/ICliente";
import { IUsuario } from "../../../interfaces/IUsuario";
import { MiddlewareAPI } from "../../../config/api";
import { AxiosResponse } from "axios";
import { IBadRequestResponse } from "../../../interfaces/IBadRequestResponse";

export const getClients = createAsyncThunk(
    "clientsData/getClients",
    async (
        args,
        { fulfillWithValue, rejectWithValue }
    ): Promise<ICliente | any> => {
        try {
            const response = await MiddlewareAPI.get<IClienteResponse>(
                "cardapioVirtual/clientes"
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
        args: { cliente: ICliente },
        { fulfillWithValue, rejectWithValue }
    ) => {
        const bool = true;

        return fulfillWithValue(bool);
    }
);

export const editarClient = createAsyncThunk(
    "clientsData/editarClient",
    async (
        args: { cliente: ICliente },
        { fulfillWithValue, rejectWithValue }
    ) => {
        const bool = true;

        return fulfillWithValue(bool);
    }
);
