export interface ITheme {
    id: string;
    name: string;
    colors: {
        ///ESSENTIAL
        primary: string;
        secondary: string;
        light01: string;
        light02: string;
        ccc: string;
        carbon: string;
        primaryLight: string;
        background: string;
        white: string;

        ///CONTRAST WHITE
        blueWhiteContrast: string;
        redWhiteContrast: string;
        primaryWhiteContrast: string;
        yellowWhiteContrast: string;
        greenWhiteContrast: string;
        orangeWhiteContrast: string;

        ///NEUTRAL
        neutral0: string;
        neutral1: string;
        neutral2: string;
        neutral3: string;
        neutral4: string;
        neutral5: string;
        neutral6: string;
        neutral7: string;
        neutral8: string;
        neutral9: string;
        neutral10: string;
    };
}
