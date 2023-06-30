import { IBadRequestResponse } from "../../../interfaces/IBadRequestResponse";
import { IUsuario } from "../../../interfaces/IUsuario";
import { getGeneralData, postLogin } from "./generalDataThunk";
import { GeneralDataState } from "./generalDataTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: GeneralDataState = {
    generalData: undefined,
    generalDataStatus: "idle",
    loading: false,
    auth: "LoggedOut",
    usuario: undefined,
    errorMessage: undefined,
};

const generalDataSlice = createSlice({
    name: "generalData",
    initialState,
    reducers: {
        setLoading(state: GeneralDataState) {
            state.loading = true;
        },
        setLoaded(state: GeneralDataState) {
            state.loading = false;
        },
        logOut(state: GeneralDataState) {
            state.auth = "LoggedOut";
            state.usuario = undefined;
        },
        logIn(state: GeneralDataState) {
            state.auth = "LoggedIn";
        },
    },
    extraReducers: (buider) => {
        buider.addCase(
            getGeneralData.fulfilled,
            (state: GeneralDataState, action: PayloadAction<string>) => {
                state.generalDataStatus = "success";
                state.generalData = action.payload;
            }
        );
        buider.addCase(getGeneralData.rejected, (state: GeneralDataState) => {
            state.generalDataStatus = "error";
        });
        buider.addCase(getGeneralData.pending, (state: GeneralDataState) => {
            state.generalDataStatus = "pending";
        });
        buider.addCase(
            postLogin.fulfilled,
            (state: GeneralDataState, action: PayloadAction<IUsuario>) => {
                state.loading = false;
                state.usuario = action.payload;
            }
        );
        buider.addCase(postLogin.rejected, (state: GeneralDataState, e) => {
            state.loading = false;
            state.errorMessage = e.error.message;
        });
        buider.addCase(postLogin.pending, (state: GeneralDataState) => {
            state.loading = true;
        });
    },
});

export const { setLoaded, setLoading, logOut, logIn } =
    generalDataSlice.actions;

export default generalDataSlice;
