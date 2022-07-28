import { ThemeProvider } from "styled-components";
import { Weather } from "@features/weather/pages/Weather";

import { GlobalStyle } from "./theme/global";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Weather />
    </ThemeProvider>
  );
}

export default App;
