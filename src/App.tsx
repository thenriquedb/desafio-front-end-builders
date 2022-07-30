import { WeatherProvider } from "@features/weather/contexts/WeatherContext";
import { Weather } from "@features/weather/pages/Weather";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./theme/global";
import theme from "./theme/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
