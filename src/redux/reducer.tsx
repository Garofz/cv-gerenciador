import { combineReducers } from "@reduxjs/toolkit";
import { GeneralDataState } from "./features/generalData/generalDataTypes";
import generalDataSlice from "./features/generalData/generalDataSlice";
import { ClientsDataState } from "./features/clientsData/clientsDataTypes";
import clientsDataSlice from "./features/clientsData/clientsDataSlice";

export interface AppState {
    generalData: GeneralDataState;
    clientsData: ClientsDataState;
}

export const rootReducer = combineReducers<AppState>({
    generalData: generalDataSlice.reducer,
    clientsData: clientsDataSlice.reducer,
});
