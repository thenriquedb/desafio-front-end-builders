import { HTMLAttributes, PropsWithChildren } from "react";
import { FontSize, Color } from "src/theme";
import styled, { css } from "styled-components";
import * as CSS from "csstype";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: FontSize;
  color?: Color;
  transform?: CSS.Property.TextTransform;
  weight?: CSS.Property.FontWeight;
  bold?: boolean;
}

const StyledText = styled.p<TextProps>`
  font-size: ${({ theme, size = "md" }) => theme.fontSizes[size]};
  color: ${({ theme, color = "text" }) => theme.colors[color]};
  text-transform: ${({ transform = "none" }) => transform};
  font-weight: ${({ weight = "normal" }) => weight};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;

export function Text({ size = "md", ...rest }: PropsWithChildren<TextProps>) {
  return <StyledText size={size} {...rest} />;
}
