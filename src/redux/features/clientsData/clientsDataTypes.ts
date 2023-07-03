import { ICliente } from "../../../interfaces/ICliente";
import { IUserCliente } from "../../../interfaces/IUserClienteResponse";

export type ClientsDataState = {
    // Clients Data
    clientsData: ICliente[] | undefined;
    clientsDataStatus: "idle" | "pending" | "success" | "error";

    //Users Data
    usersData: IUserCliente[] | undefined;
    usersDataStatus: "idle" | "pending" | "success" | "error";
};

export type ClientsDataStateResponseType = string;
