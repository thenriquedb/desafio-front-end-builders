import { Card } from "@features/ui/Card";
import styled from "styled-components";

export const Container = styled(Card)`
  padding: ${({ theme }) => theme.space[2]};

  > img {
    margin: 0 auto;
  }
`;

export const WeatherIcon = styled.div`
  height: 70px;
  width: 70px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space[1]};

  > p:first-of-type {
    margin-right: 10px;
  }
`;
