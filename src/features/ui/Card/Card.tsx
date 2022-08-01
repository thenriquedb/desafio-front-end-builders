import { Text, TextProps } from "@features/ui/Text";
import { HTMLAttributes, PropsWithChildren } from "react";

import { StyledCard, StyledContent } from "./Card.styles";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  center?: boolean;
}

export function Card({ children, ...rest }: CardProps) {
  return <StyledCard {...rest}>{children}</StyledCard>;
}

function CardTitle({
  children,
  bold = true,
  color = "text",
  size = "sm",
  ...rest
}: TextProps) {
  return (
    <Text bold={bold} color={color} size={size} {...rest}>
      {children}
    </Text>
  );
}

function CardContent({ children }: PropsWithChildren<{}>) {
  return <StyledContent>{children}</StyledContent>;
}

Card.Title = CardTitle;
Card.Content = CardContent;
