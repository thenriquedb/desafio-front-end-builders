import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.gray};
  border-right-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  padding: 0;
  margin: 0;

  height: 80px;
  width: 80px;
`;
