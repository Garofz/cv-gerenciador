import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUsuario } from "../../../interfaces/IUsuario";
import { MiddlewareAPI } from "../../../config/api";
import { AxiosResponse } from "axios";
import { IBadRequestResponse } from "../../../interfaces/IBadRequestResponse";

export const getGeneralData = createAsyncThunk(
    "generalData/getGeneralData",
    async () => {
        return "";
    }
);

const mock: IUsuario[] = [];

export const postLogin = createAsyncThunk(
    "generalData/postLogin",
    async (
        args: { email: string; senha: string },
        { rejectWithValue, fulfillWithValue }
    ): Promise<IUsuario | any> => {
        try {
            const { data } = await MiddlewareAPI.post<
                AxiosResponse<IUsuario | IBadRequestResponse>
            >("authSchema/login", {
                email: args.email,
                password: args.senha,
            });
            return fulfillWithValue(data);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
