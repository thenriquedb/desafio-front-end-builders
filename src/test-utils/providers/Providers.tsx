import { WeatherProvider } from "@features/weather/contexts/WeatherContext";
import theme from "@theme/index";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <WeatherProvider>{children}</WeatherProvider>
    </ThemeProvider>
  );
}
