import { Text } from "@features/ui/Text";
import { capitalize } from "@utils/capitalize";

import { useWeatherContext } from "../../contexts/WeatherContext";
import {
  Container,
  WeatherDetailsWrapper,
  LocationDetailsWrapper,
  WeatherIcon,
} from "./CurrentWeather.styles";

export interface CurrentWeatherProps {
  icon?: string;
  description?: string;
  temp?: number;
  feelsLike?: number;
  city?: string;
  country?: string;
}

export function CurrentWeather({
  icon,
  description,
  temp = 0,
  feelsLike = 0,
  city,
  country,
}: CurrentWeatherProps) {
  const { formatTemperature } = useWeatherContext();
  function formatDate() {
    const formatter = new Intl.DateTimeFormat([], {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

    const today = new Date();
    return formatter.format(today);
  }

  return (
    <Container>
      <WeatherDetailsWrapper>
        <WeatherIcon
          style={{
            backgroundImage: `url("http://openweathermap.org/img/wn/${icon}@2x.png")`,
          }}
        />

        <Text bold size="4xlg">
          {formatTemperature(temp)}
        </Text>

        <Text size="sm" color="gray">
          Sensação térmica {formatTemperature(feelsLike)}
        </Text>

        <Text>{capitalize(description)}</Text>
      </WeatherDetailsWrapper>

      <LocationDetailsWrapper>
        <Text bold size="lg">
          {city}, {country}
        </Text>

        <Text>{formatDate()}</Text>
      </LocationDetailsWrapper>
    </Container>
  );
}
