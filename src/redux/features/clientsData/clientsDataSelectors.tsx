import { ICliente } from "../../../interfaces/ICliente";
import { IUserCliente } from "../../../interfaces/IUserClienteResponse";
import { RootState } from "../../store";

export const selectClientsData = (state: RootState): ICliente[] | undefined =>
    state.clientsData.clientsData;

export const selectClientsDataStatus = (state: RootState): string =>
    state.clientsData.clientsDataStatus;

export const selectUsersData = (state: RootState): IUserCliente[] | undefined =>
    state.clientsData.usersData;

export const selectUsersDataStatus = (state: RootState): string =>
    state.clientsData.usersDataStatus;
