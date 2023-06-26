import { useDispatch as useStoreDispatch } from "react-redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { AppState, rootReducer } from "./reducer";
import localforage from "localforage";
import localStorage from "redux-persist/es/storage";

const preloadedState: AppState = {} as AppState;

const persistConfig = {
    key: "root",
    storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWareEnhancer = applyMiddleware(thunk);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    preloadedState,
    enhancers: [middleWareEnhancer],
});

export type RootState = ReturnType<typeof store.getState>;

export const useAsyncDispatch = () => useStoreDispatch<typeof store.dispatch>();
