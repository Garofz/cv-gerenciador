import React from "react";
import { useThemeSelectorContext } from "../../providers/ThemeProvider/ThemeSelectorProvider";
// import { ThemeSelector } from "../../providers/Theme/ThemeSelector";
import { TextNormal } from "../../globalStyles";
import { ThemeSelector } from "ui-gds";
function Home() {
    const { selectedTheme } = useThemeSelectorContext();
    return (
        <div>
            <div>
                <TextNormal>Home</TextNormal>{" "}
            </div>
            <div style={{ padding: 12 }}>
                <TextNormal>Light Theme</TextNormal>
                <ThemeSelector mode="Default" />
            </div>
            <div style={{ padding: 12 }}>
                <TextNormal>Dark Theme</TextNormal>
                <ThemeSelector mode="DarkBlack" />
            </div>
            <div style={{ padding: 12 }}>
                <TextNormal>Blue Theme</TextNormal>
                <ThemeSelector mode="DarkBlue" />
            </div>
        </div>
    );
}

export default Home;
