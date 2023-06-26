import { ICliente } from "../../../interfaces/ICliente";
import { RootState } from "../../store";

export const selectClientsData = (state: RootState): ICliente[] | undefined =>
    state.clientsData.clientsData;

export const selectClientsDataStatus = (state: RootState): string =>
    state.clientsData.clientsDataStatus;
