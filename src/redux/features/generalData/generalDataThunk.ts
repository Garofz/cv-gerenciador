import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginUsuarioResponse, IUsuario } from "../../../interfaces/IUsuario";
import { MiddlewareAPI } from "../../../config/api";
import { AxiosError, AxiosResponse } from "axios";
import { IBadRequestResponse } from "../../../interfaces/IBadRequestResponse";

export const getGeneralData = createAsyncThunk(
    "generalData/getGeneralData",
    async () => {
        return "";
    }
);
export const postLogin = createAsyncThunk(
    "generalData/postLogin",
    async (args: { email: string; senha: string }): Promise<IUsuario | any> => {
        try {
            const response = await MiddlewareAPI.post("authSchema/login", {
                email: args.email,
                password: args.senha,
            });

            if (response.data.error != undefined) return response.data;

            return response.data.user;
        } catch (err: any) {
            return err.response;
        }
    }
);
