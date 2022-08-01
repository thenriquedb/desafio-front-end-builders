import { Spinner } from "@features/ui/Spinner";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export function Loading() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
