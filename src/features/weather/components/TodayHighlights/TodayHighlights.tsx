import { Card } from "@features/ui/Card";

import { Response } from "../../hooks/useWeatherOneCallQuery";
import { Grid, Unit, Value } from "./TodayHighlights.styles";

export function TodayHighlights({ data }: { data?: Response }) {
  function convertVisibility(visibility = 0) {
    return visibility / 1000;
  }

  return (
    <Grid>
      <Card>
        <Card.Title>Umidade</Card.Title>
        <Card.Content>
          <Value>{data?.current.humidity}</Value>
          <Unit>%</Unit>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title>Velocidade do vento</Card.Title>
        <Card.Content>
          <Value>{data?.current.wind_speed}</Value>
          <Unit>m/s</Unit>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title>Nuvens</Card.Title>
        <Card.Content>
          <Value>{data?.current.clouds}</Value>
          <Unit>%</Unit>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title>Indíce UV</Card.Title>
        <Card.Content>
          <Card.Content>
            <Value>{data?.current.uvi}</Value>
          </Card.Content>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title>Pressão atmosférica</Card.Title>
        <Card.Content>
          <Card.Content>
            <Value>{data?.current.pressure}</Value>
            <Unit>hPa</Unit>
          </Card.Content>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title>Visibilidade</Card.Title>
        <Card.Content>
          <Card.Content>
            <Value>{convertVisibility(data?.current.visibility)}</Value>
            <Unit>km</Unit>
          </Card.Content>
        </Card.Content>
      </Card>
    </Grid>
  );
}
