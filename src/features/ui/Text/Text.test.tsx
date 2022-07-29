import { render } from "@testing-library/react";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";

import { Text, TextProps } from "./Text";

function setup(props = {} as TextProps) {
  return render(
    <ThemeProvider theme={theme}>
      <Text data-testid="text" {...props}>
        any text
      </Text>
    </ThemeProvider>
  );
}

describe("<Text />", () => {
  it("should render p by default", () => {
    const { getByTestId } = setup();
    const text = getByTestId("text");

    expect(text.nodeName).toBe("P");
  });

  it("should apply default styles correctly", () => {
    const { getByTestId } = setup();
    const text = getByTestId("text");

    expect(text).toHaveStyle(`
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes.md};
      line-height: normal;
    `);
  });

  it("should apply truncate style", () => {
    const { getByTestId } = setup({ truncate: true });
    const text = getByTestId("text");

    expect(text).toHaveStyle(`
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `);
  });

  it("should apply bold style", () => {
    const { getByTestId } = setup({ bold: true });
    const text = getByTestId("text");

    expect(text).toHaveStyle("font-weight: bold;");
  });

  it("should apply inline style", () => {
    const { getByTestId } = setup({ inline: true });
    const text = getByTestId("text");

    expect(text).toHaveStyle("display: inline;");
  });

  it("should apply color style", () => {
    const { getByTestId } = setup({ color: "accent" });
    const text = getByTestId("text");

    expect(text).toHaveStyle(`color: ${theme.colors.accent};`);
  });

  it("should apply size style", () => {
    const { getByTestId } = setup({ size: "lg" });
    const text = getByTestId("text");

    expect(text).toHaveStyle(`font-size: ${theme.fontSizes.lg};`);
  });

  it("as props works correctly", () => {
    // @ts-ignore
    const { getByTestId } = setup({ as: "a" });
    const text = getByTestId("text");

    expect(text.nodeName).toBe("A");
  });
});
