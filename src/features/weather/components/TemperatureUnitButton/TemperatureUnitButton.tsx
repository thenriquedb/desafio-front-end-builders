import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface TemperatureUnitButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  unit?: "C" | "F";
  selected?: boolean;
}

const StyledButton = styled.button<TemperatureUnitButtonProps>`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  background: transparent;
  background: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  font-weight: bolder;

  ${({ selected = false, theme }) =>
    selected &&
    css`
      background: ${theme.colors.primary};
    `};
`;

export function TemperatureUnitButton({
  unit = "C",
  ...rest
}: TemperatureUnitButtonProps) {
  return (
    <StyledButton type="button" data-testid="temperature-button" {...rest}>
      °{unit}
    </StyledButton>
  );
}
