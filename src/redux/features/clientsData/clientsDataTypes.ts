import { ICliente } from "../../../interfaces/ICliente";
import {
    IUserCliente,
    IUserList,
} from "../../../interfaces/IUserClienteResponse";

export type ClientsDataState = {
    // Clients Data
    clientsData: ICliente[] | undefined;
    clientsDataStatus: "idle" | "pending" | "success" | "error";
    userDataStatus: "idle" | "pending" | "success" | "error";
};

export type ClientsDataStateResponseType = string;
