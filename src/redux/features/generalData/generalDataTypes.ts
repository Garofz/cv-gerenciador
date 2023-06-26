import { IUsuario } from "../../../interfaces/IUsuario";

export type GeneralDataState = {
    // General Data
    generalData: string | undefined;
    generalDataStatus: "idle" | "pending" | "success" | "error";

    //Loading
    loading: boolean;

    //Auth
    auth: "LoggedIn" | "LoggedOut";

    //UsuarioLogin
    usuario: IUsuario | undefined
}

export type GeneralDataStateResponseType = string