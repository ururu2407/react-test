import { createTheme } from "@mui/material/styles";

export const shades = {
    primary: {
        100: "#FFFFFF",
        95: "#FFF9E0",
        90: "#FBEAA7",
        80: "#E5CE71",
        70: "#C4B059",
        60: "#A19048",
        50: "#867732",
        40: "#6C5E1B",
        30: "#534602",
        20: "#393000",
        10: "#211B00",
        0: "#000000",
    },
    neutral: {
        100: "#FFFFFF",
        95: "#F3F3F2",
        90: "#D1D1C7",
        80: "#D0D0C8",
        70: "#B8B8AD",
        60: "#9F9F93",
        50: "#868679",
        40: "#65655D",
        30: "#4F4F4A",
        20: "#343432",
        10: "#1A1A19",
        0: "#000000",
    },
    neutralVariant: {
        100: "#FFFFFF",
        95: "#F3F2F1",
        90: "#E6E5E5",
        80: "#CBC9C8",
        70: "#B5B2B0",
        60: "#9A9693",
        50: "#817C79",
        40: "#666360",
        30: "#4C4948",
        20: "#32302F",
        10: "#171717",
        0: "#000000",
    },
    surface: {
        5: "#0D0D0C",
        95: "#F2F2F2",
        60: "#CBC9C8",
    },
    divider: {
        1: "#393937",
    },
    extended: {
        1: '#5FCBA4',
        2: '#5FA0CB',
        3: '#6E5FCB',
        4: '#FF7777',
    },
    primaryOpacity:{
        8: 'rgba(229, 206, 113, 0.08)',
        12: 'rgba(229, 206, 113, 0.12)'
    },
    surfaceOpacity:{
        8: 'rgba(242, 242, 242, 0.08)',
        12: 'rgba(242, 242, 242, 0.12)'
    }
};

const theme = createTheme({
    palette: {
        primary: {
            primary: shades.primary[80],
            onPrimary: shades.primary[20],
            main: shades.surface[5],
            light: shades.surface[95],
            contrastText: shades.surface[60]
        },
        text: {
            primary: shades.surface[60],
            secondary: shades.surface[95]
        },
        divider: shades.divider[1],
        outlined: shades.neutralVariant[50],
        action: {
            active: shades.surface[60]
        },
        button: {
            hover: shades.primaryOpacity[8],
            pressed: shades.primaryOpacity[12],
        },
        textButton: {
            hover: shades.surfaceOpacity[8],
            pressed: shades.surfaceOpacity[12],
        },
        mintGreen: shades.extended[1],
        carolinaBlue: shades.extended[2],
        grapePurple: shades.extended[3],
        coralRed: shades.extended[4],
    },
    typography: {
        fontFamily: `"Inconsolata", sans-serif`,
        Ligth: 300,
        Regular: 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,

        body1: {
            fontFamily: `"Inconsolata", sans-serif`,
            fontSize: 20,
            lineHeight: 1.4,
            letterSpacing: 0
        },
        body2: {
            fontFamily: `"Inconsolata", sans-serif`,
            fontSize: 16,
            lineHeight: 1.5,
            letterSpacing: 0.5
        },
        body3: {
            fontFamily: `"Inconsolata", sans-serif`,
            fontSize: 14,
            lineHeight: 1.42,
            letterSpacing: 0.25,
            fontWeight: 400
        },
        body4: {
            fontFamily: `"Inconsolata", sans-serif`,
            fontSize: 12,
            lineHeight: 1.33,
            letterSpacing: 0.4,
            fontWeight: 400
        },
        label1: {
            fontFamily: `"Inconsolata", sans-serif`,
            fontSize: 16,
            lineHeight: 1.5,
            letterSpacing: 0,
            fontWeight: 400
        },
        label2: {
            fontFamily: `"Inconsolata", sans-serif`,
            fontSize: 14,
            lineHeight: 1.42,
            letterSpacing: 0.1,
            fontWeight: 400
        },
        body: {
            fontFamily: `"Montserrat", sans-serif`,
            fontSize: 16,
            lineHeight: 1.5,
            letterSpacing: 0.5,
            fontWeight: 400
        },
        title: {
            fontFamily: `"Montserrat", sans-serif`,
            fontSize: 20,
            lineHeight: 1.4,
            letterSpacing: 0,
            fontWeight: 400
        },
        headline: {
            fontFamily: `"Montserrat", sans-serif`,
            fontSize: 24,
            lineHeight: 1.33,
            letterSpacing: 0,
            fontWeight: 400
        },
        display: {
            fontFamily: `"Montserrat", sans-serif`,
            fontSize: 40,
            lineHeight: 1.2,
            letterSpacing: 0,
            fontWeight: 400
        },
    },
});

export default theme;