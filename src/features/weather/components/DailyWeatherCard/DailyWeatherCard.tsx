import { Card } from "@features/ui/Card";
import { Text } from "@features/ui/Text";
import { useWeatherContext } from "@features/weather/contexts/WeatherContext";
import { capitalize } from "@utils/capitalize";

import {
  Container,
  WeatherIcon,
  TemperatureWrapper,
} from "./DailyWeatherCard.styles";

export interface DailyWeatherCardProps {
  dateTime: number;
  min: number;
  max: number;
  icon: string;
  weatherDescription: string;
}

export function DailyWeatherCard({
  max,
  min,
  icon,
  dateTime,
  weatherDescription,
}: DailyWeatherCardProps) {
  const { formatTemperature } = useWeatherContext();

  function formatDate() {
    const unixSeconds = dateTime * 1000;
    const formatter = new Intl.DateTimeFormat([], { weekday: "short" });
    const date = new Date(unixSeconds);

    return formatter.format(date);
  }

  return (
    <Container center>
      <Text bold size="sm" align="center">
        {formatDate()}
      </Text>

      <WeatherIcon
        style={{
          backgroundImage: `url("http://openweathermap.org/img/wn/${icon}@2x.png")`,
        }}
      />

      <Text size="xs" align="center">
        {capitalize(weatherDescription)}
      </Text>

      <TemperatureWrapper>
        <Text inline bold size="xs">
          {formatTemperature(min)}
        </Text>

        <Text inline bold size="xs" color="gray">
          {formatTemperature(max)}
        </Text>
      </TemperatureWrapper>
    </Container>
  );
}
