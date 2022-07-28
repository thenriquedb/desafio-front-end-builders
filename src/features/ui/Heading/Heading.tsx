import { HTMLAttributes, PropsWithChildren } from "react";
import { FontSize, Color } from "src/theme";

import { Text, TextProps } from "../Text/Text";

export interface TitleProps extends TextProps {
  size?: TitleSize;
  color?: Color;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

type TitleSize = Extract<FontSize, "xs" | "sm" | "md" | "lg" | "xlg" | "2xlg">;

export function Heading({
  size = "md",
  as = "h1",
  ...rest
}: PropsWithChildren<TitleProps>) {
  const titleSize: Record<TitleSize, FontSize> = {
    xs: "sm",
    sm: "md",
    md: "lg",
    lg: "xlg",
    xlg: "2xlg",
    "2xlg": "3xlg",
  };

  return <Text size={titleSize[size]} as={as} {...rest} />;
}
