import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICliente } from "../../../interfaces/ICliente";
import { IUsuario } from "../../../interfaces/IUsuario";

export const getClients = createAsyncThunk(
    "clientsData/getClients",
    async (args, { fulfillWithValue, rejectWithValue }) => {
        const mock: ICliente[] = [
            {
                id: 1,
                nome: "TABACARIA SANTO ANDRÉ",
                inscricao: "15.884.491/0001-58",
                tipoPessoa: "PJ",
                ativo: true,
                logo: "assets/tsa-logo.svg",
            },
            {
                id: 2,
                nome: "TABACARIA SAO BERNARDO",
                inscricao: "85.895.719/0001-90",
                tipoPessoa: "PJ",
                ativo: true,
                logo: "assets/tsa-logo.svg",
            },
            {
                id: 3,
                nome: "LEONARDO PASQUARELLI",
                inscricao: "403.969.390-66",
                tipoPessoa: "PF",
                ativo: false,
                logo: "assets/tsa-logo.svg",
            },
        ];

        return fulfillWithValue(mock);
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
