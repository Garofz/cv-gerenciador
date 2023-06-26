import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ClientsDataState } from "./clientsDataTypes";
import { addClient, getClients } from "./clientsDataThunk";
import { ICliente } from "../../../interfaces/ICliente";

const initialState: ClientsDataState = {
    clientsData: undefined,
    clientsDataStatus: "idle",
};

const clientsDataSlice = createSlice({
    name: "clientsData",
    initialState,
    reducers: {
        adicionaCliente(
            state: ClientsDataState,
            action: PayloadAction<ICliente>
        ) {
            const aux = state.clientsData;
            aux?.push(action.payload);
            state.clientsData = aux;
        },
        editClient(state: ClientsDataState, action: PayloadAction<ICliente>) {
            const clienteExists = state.clientsData?.some(
                (cli) => cli.id === action.payload.id
            );

            if (clienteExists) {
                const clients = state.clientsData?.map((cli) => {
                    if (cli.id === action.payload.id) {
                        return action.payload;
                    }

                    return cli;
                });

                state.clientsData = clients;
            }
        },
    },
    extraReducers: (buider) => {
        buider.addCase(
            getClients.fulfilled,
            (state: ClientsDataState, action: PayloadAction<ICliente[]>) => {
                state.clientsData = action.payload;
                state.clientsDataStatus = "success";
            }
        );
        buider.addCase(getClients.rejected, (state: ClientsDataState) => {
            state.clientsDataStatus = "error";
        });
        buider.addCase(getClients.pending, (state: ClientsDataState) => {
            state.clientsDataStatus = "pending";
        });
    },
});

export const { adicionaCliente, editClient } = clientsDataSlice.actions;

export default clientsDataSlice;
