import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeSelectorProvider } from "ui-gds";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const persistor = persistStore(store);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeSelectorProvider>
                    <App />
                </ThemeSelectorProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
