import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;

export const WeatherDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.space[4]};
  justify-content: space-between;

  > p:last-of-type {
    margin-top: ${({ theme }) => theme.space[1]};
  }
`;

export const LocationDetailsWrapper = styled.div``;

export const WeatherIcon = styled.div`
  height: 160px;
  width: 160px;
  background-repeat: no-repeat;
  background-size: contain;
`;
