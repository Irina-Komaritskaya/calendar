import styled, { css } from "styled-components";
export const baseTheme = {
    colors: {
        background: "#e5e5e5",
        secondBackground: "white",
        textPrimary: "black",
        textSecondary: "#cccccc",
        accept: "#FF3131",
        selection: "#EBECFF",
    },

    typography: {
        textSmall: css`
            font-size: 12px;
            font-weight: 500;
        `,

        textMedium: css`
            font-size: 24px;
            font-weight: 700;
        `,

        textLarge: css`
            font-size: 2em;
            font-weight: 700;
        `,
    },

    media: {
        extraLarge: "(max-width: 1140px)",
        large: "(max-width: 960px)",
        medium: "(max-width: 720px)",
        small: "(max-width: 540px)",
    },
};
