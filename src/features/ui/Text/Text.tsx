import * as CSS from "csstype";
import { HTMLAttributes, PropsWithChildren } from "react";
import { FontSize, Color } from "src/theme";
import styled, { css } from "styled-components";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  align?: CSS.Property.TextAlign;
  bold?: boolean;
  inline?: boolean;
  color?: Color;
  size?: FontSize;
  transform?: CSS.Property.TextTransform;
  weight?: CSS.Property.FontWeight;
}

const StyledText = styled.p<TextProps>`
  font-size: ${({ theme, size = "md" }) => theme.fontSizes[size]};
  color: ${({ theme, color = "text" }) => theme.colors[color]};
  text-transform: ${({ transform = "none" }) => transform};
  font-weight: ${({ weight = "regular" }) => weight};
  text-align: ${({ align = "left" }) => align};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
    `}
`;

export function Text({ size = "md", ...rest }: PropsWithChildren<TextProps>) {
  return <StyledText size={size} {...rest} />;
}
