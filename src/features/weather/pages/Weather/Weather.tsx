import { useGeolocation } from "@features/shared/hooks/useGeolocation";
import { Heading } from "@features/ui/Heading";
import { Spinner } from "@features/ui/Spinner";

import { CurrentWeather } from "../../components/CurrentWeather";
import { DailyWeatherCard } from "../../components/DailyWeatherCard";
import { Loading } from "../../components/Loading";
import { TemperatureUnitButton } from "../../components/TemperatureUnitButton";
import { TodayHighlights } from "../../components/TodayHighlights";
import { Unit, useWeatherContext } from "../../contexts/WeatherContext";
import { useWeatherOneCallQuery } from "../../hooks/useWeatherOneCallQuery";
import { useWeatherQuery } from "../../hooks/useWeatherQuery";
import {
  Container,
  LateralSection,
  Content,
  Actions,
  DailyWrapper,
  TodayHighlightsContainer,
} from "./Weather.styles";

export function Weather() {
  const { coordinates } = useGeolocation();
  const { unit, onChangeCelsius, onChangeFahrenheit } = useWeatherContext();

  const { data: weatherData, isLoading: isLoadingWeather } = useWeatherQuery({
    lat: coordinates?.latitude,
    lon: coordinates?.longitude,
  });

  const { data: oneCallData, isLoading: isLoadingOneCall } =
    useWeatherOneCallQuery({
      lat: coordinates?.latitude,
      lon: coordinates?.longitude,
    });

  if (isLoadingWeather || isLoadingOneCall) return <Loading />;

  return (
    <Container>
      <LateralSection>
        <CurrentWeather
          temp={oneCallData?.current.temp}
          feelsLike={oneCallData?.current.feels_like}
          description={weatherData?.weather[0].description}
          icon={weatherData?.weather[0].icon}
          city={weatherData?.name}
          country={weatherData?.sys.country}
        />
      </LateralSection>

      <Content>
        <Actions>
          <TemperatureUnitButton
            selected={unit === Unit.Fahrenheit}
            unit="F"
            onClick={onChangeFahrenheit}
          />

          <TemperatureUnitButton
            selected={unit === Unit.Celsius}
            unit="C"
            onClick={onChangeCelsius}
          />
        </Actions>

        <DailyWrapper>
          <Heading>Semana</Heading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fill, minmax(180px, 1fr))`,
              gap: 15,
            }}
          >
            {oneCallData?.daily.map((dailyWeather) => (
              <DailyWeatherCard
                dateTime={dailyWeather?.dt}
                icon={dailyWeather?.weather[0].icon}
                key={dailyWeather?.dt}
                max={dailyWeather.temp.max}
                min={dailyWeather.temp.min}
                weatherDescription={dailyWeather.weather[0].description}
              />
            ))}
          </div>
        </DailyWrapper>

        <TodayHighlightsContainer>
          <Heading>Hoje</Heading>

          <TodayHighlights data={oneCallData} />
        </TodayHighlightsContainer>
      </Content>
    </Container>
  );
}
