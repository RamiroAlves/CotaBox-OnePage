import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;
        colors: {
            primary: string;
            secondary: string;
            danger: string;
            gray: string;
            backgroundColor: string;
            textColor: string;
            black: string;
        }
    }
}