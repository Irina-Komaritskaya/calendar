import { Test } from "../src/components/test";
import { baseTheme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global";
import GlobalFonts from "./fonts/fonts";
function App() {
    return (
        <ThemeProvider theme={baseTheme}>
            <GlobalFonts />
            <GlobalStyles />

            <Test />
        </ThemeProvider>
    );
}

export default App;
