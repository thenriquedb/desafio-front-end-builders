import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.shape};
  padding: ${({ theme }) => theme.space[4]};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    margin: 0 auto;
  }
`;

export const WeatherIcon = styled.div`
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
