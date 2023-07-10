import React from "react";
import { useThemeSelectorContext } from "../../providers/ThemeProvider/ThemeSelectorProvider";
// import { ThemeSelector } from "../../providers/Theme/ThemeSelector";
import { TextNormal } from "../../globalStyles";
import { ThemeSelector } from "ui-gds";
function Home() {
    const { selectedTheme } = useThemeSelectorContext();
    return <div></div>;
}

export default Home;
