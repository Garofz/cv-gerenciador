import { ICliente } from "../../../interfaces/ICliente";
import {
    IUserCliente,
    IUserList,
} from "../../../interfaces/IUserClienteResponse";
import { RootState } from "../../store";

export const selectClientsData = (state: RootState): ICliente[] | undefined =>
    state.clientsData.clientsData;

export const selectClientsDataStatus = (state: RootState): string =>
    state.clientsData.clientsDataStatus;

export const selectUserDataStatus = (state: RootState): string =>
    state.clientsData.userDataStatus;
