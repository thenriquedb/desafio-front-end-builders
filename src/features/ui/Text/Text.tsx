import * as CSS from "csstype";
import { HTMLAttributes, PropsWithChildren } from "react";
import { FontSize, Color } from "src/theme";
import styled, { css } from "styled-components";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  align?: CSS.Property.TextAlign;
  bold?: boolean;
  color?: Color;
  inline?: boolean;
  size?: FontSize;
  transform?: CSS.Property.TextTransform;
  truncate?: boolean;
  weight?: CSS.Property.FontWeight;
  as?: React.ElementType;
}

const StyledText = styled.p<TextProps>`
  font-size: ${({ theme, size = "md" }) => theme.fontSizes[size]};
  color: ${({ theme, color = "text" }) => theme.colors[color]};
  text-transform: ${({ transform = "none" }) => transform};
  font-weight: ${({ weight = "regular" }) => weight};
  text-align: ${({ align = "left" }) => align};
  line-height: normal;

  ${({ truncate }) =>
    truncate &&
    css`
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

  ${({ inline }) =>
    inline &&
    css`
      display: inline;
    `}
`;

export function Text({ size = "md", ...rest }: PropsWithChildren<TextProps>) {
  return <StyledText size={size} {...rest} />;
}
