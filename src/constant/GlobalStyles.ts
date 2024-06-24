import { createGlobalStyle, ThemeProvider } from "styled-components";

export const theme = {
    borderRadius: "4px",
    colors: {
        primary: "#00b8e2",
        secondary: "#7F56AA",
        gray: "#a2a2a2",
        danger: "#c9061a",
        backgroundColor: "#fafafa",
        textColor: "#fff",
        black: "#000",
    }
};

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --border-radius: ${props => props.theme.borderRadius};
        --color-primary: ${props => props.theme.colors.primary};
        --color-secondary: ${props => props.theme.colors.secondary};
        --color-gray: ${props => props.theme.colors.gray};
        --color-danger: ${props => props.theme.colors.danger};
        --color-background: ${props => props.theme.colors.backgroundColor};
        --color-text: ${props => props.theme.colors.textColor};
        --color-black: ${props => props.theme.colors.black};
    }
`;

export { GlobalStyles, ThemeProvider };
