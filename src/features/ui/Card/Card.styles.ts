import styled, { css } from "styled-components";

export const StyledCard = styled.div<{ center?: boolean }>`
  background: ${({ theme }) => theme.colors.shape};
  padding: ${({ theme }) => theme.space[4]};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  ${({ center }) =>
    center &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

export const StyledContent = styled.div`
  margin-top: ${({ theme }) => theme.space[1]};
`;
