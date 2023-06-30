import React, { createContext, useContext, useEffect, useState } from "react";
import { ITheme } from "../Theme/ITheme";
import { LightTheme } from "../Theme/Light.theme";
import { DarkTheme } from "../Theme/Dark.theme";

export interface ToastContextData {
    setMode(mode: string): void;
    selectedTheme: ITheme;
}

const ThemeSelectorContext = createContext<ToastContextData>(
    {} as ToastContextData
);

type ThemeSelectorProviderProps = {
    children?: JSX.Element;
};

export const ThemeSelectorProvider: React.FunctionComponent<
    ThemeSelectorProviderProps
> = ({ children }): JSX.Element => {
    const [selectedTheme, setSelectedTheme] = useState(LightTheme);
    const [scrollStyleSheet, setScrollStyleSheet] = useState<any>(
        new CSSStyleSheet()
    );
    const [datePickerStyleSheet, setDatePickerStyleSheet] = useState<any>(
        new CSSStyleSheet()
    );

    const currentNavigator = (): string => {
        const ua = navigator.userAgent;
        let item;
        let M =
            ua.match(
                /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\\.]+)/i
            ) || [];
        if (/trident/i.test(M[1])) {
            item = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
            return `IE ${item[1] || ""}`;
        }
        M = M[2]
            ? [M[1], M[2]]
            : [navigator.appName, navigator.appVersion, "-?"];
        if ((item = ua.match(/version\/([\\/\d]+)/i)) != null) M[2] = item[1];
        return M.join(" ").toLowerCase();
    };

    const setMode = (mode: "Default" | "Dark"): void => {
        if (mode === "Default") {
            setSelectedTheme(LightTheme);
            localStorage.setItem("@theme", "Default");
        } else if (mode === "Dark") {
            setSelectedTheme(DarkTheme);
            localStorage.setItem("@theme", "Dark");
        }
    };

    useEffect(() => {
        const theme = localStorage.getItem("@theme");
        if (theme === "Default") setMode("Default");
        if (theme === "Dark") setMode("Dark");
    }, []);

    return (
        <ThemeSelectorContext.Provider value={{ setMode, selectedTheme }}>
            {children}
        </ThemeSelectorContext.Provider>
    );
};

export const useThemeSelectorContext = (): ToastContextData =>
    useContext(ThemeSelectorContext);
