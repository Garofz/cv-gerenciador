import React from "react";
import { useThemeSelectorContext } from "../../providers/ThemeProvider/ThemeSelectorProvider";
import { ThemeSelector } from "../../providers/Theme/ThemeSelector";
function Home() {
    const { selectedTheme } = useThemeSelectorContext();
    return (
        <div>
            <div>Home</div>
            <div style={{ padding: 12 }}>
                Light Theme
                <ThemeSelector mode="Default" />
            </div>
            <div style={{ padding: 12 }}>
                Dark Theme
                <ThemeSelector mode="Dark" />
            </div>
        </div>
    );
}

export default Home;
