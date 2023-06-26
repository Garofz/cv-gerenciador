import { IUsuario } from "../../../interfaces/IUsuario";
import { RootState } from "../../store";

export const selectGeneralData = (state: RootState): string | undefined =>
    state.generalData.generalData;

export const selectGeneralDataStatus = (state: RootState): string | undefined =>
    state.generalData.generalDataStatus;

export const selectLoading = (state: RootState): boolean =>
    state.generalData.loading;

export const selectUsuario = (state: RootState): IUsuario | undefined =>
    state.generalData.usuario;

export const selectAuthAttributs = (
    state: RootState
): "LoggedIn" | "LoggedOut" => state.generalData.auth;
