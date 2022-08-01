import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space[4]};
`;

export const Value = styled.p`
  display: inline;
  font-size: ${({ theme }) => theme.fontSizes["2xlg"]};
`;

export const Unit = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  margin-left: ${({ theme }) => theme.space[1]};
`;
