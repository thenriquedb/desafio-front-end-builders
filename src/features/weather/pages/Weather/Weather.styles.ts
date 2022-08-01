import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  height: 100vh;
  gap: ${({ theme }) => theme.space[8]};
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(2, 1fr);
  background: ${({ theme }) => theme.colors.background};
  grid-template-areas:
    "current-weather content"
    "current-weather content";

  @media (max-width: 767px) {
    overflow: scroll;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "current-weather"
      "content";
  }
`;

export const LateralSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-area: "current-weather";
  background: ${({ theme }) => theme.colors.shape};
  padding: ${({ theme }) => theme.space[4]};
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr auto 5fr;
  gap: ${({ theme }) => theme.space[8]};
  padding: ${({ theme }) => theme.space[8]};
  padding-left: 0;
  overflow: scroll;

  @media (max-width: 767px) {
    overflow: auto;
    padding-left: ${({ theme }) => theme.space[8]};
  }

  grid-area: "content";
  height: inherit;

  grid-template-areas:
    "actions"
    "daily"
    "highlights";
`;

export const Actions = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: "actions";

  > button:first-of-type {
    margin-right: ${({ theme }) => theme.space[1]};
  }
`;

export const DailyWrapper = styled.section`
  grid-area: "daily";

  > h1 {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`;

export const TodayHighlightsContainer = styled.section`
  grid-area: "highlights";

  > h1 {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`;

export const HighlightsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space[4]};
`;
