import { ButtonHTMLAttributes } from "react";
import { useThemeSelectorContext } from "../ThemeProvider/ThemeSelectorProvider";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    mode: "Default" | "Dark";
    size?: "large" | "small";
}
export const ThemeSelector = ({
    mode = "Default",
    size = "large",
    ...props
}: Props): any => {
    const { selectedTheme, setMode } = useThemeSelectorContext();

    return (
        <button onClick={() => setMode(mode)}>
            {mode === "Default" ? "Light" : "Dark"}
        </button>
    );
};
