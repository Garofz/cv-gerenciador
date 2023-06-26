import { ICliente } from "../../../interfaces/ICliente";

export type ClientsDataState = {
    // Clients Data
    clientsData: ICliente[] | undefined;
    clientsDataStatus: "idle" | "pending" | "success" | "error";

    
}

export type ClientsDataStateResponseType = string