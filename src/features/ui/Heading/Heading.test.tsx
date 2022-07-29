import { render } from "@testing-library/react";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";

import { Heading, HeadingProps } from "./Heading";

function setup(props = {} as HeadingProps) {
  return render(
    <ThemeProvider theme={theme}>
      <Heading data-testid="heading" {...props}>
        any text
      </Heading>
    </ThemeProvider>
  );
}

describe("<Heading />", () => {
  it("should render h1 by default", () => {
    const { getByTestId } = setup();
    const heading = getByTestId("heading");

    expect(heading.nodeName).toBe("H1");
  });

  it("should apply default styles correctly", () => {
    const { getByTestId } = setup();
    const heading = getByTestId("heading");

    expect(heading).toHaveStyle(`
      color: ${theme.colors.text};
      text-align: left;
      line-height: normal;
    `);
  });

  it("should truncate text by default", () => {
    const { getByTestId } = setup();
    const heading = getByTestId("heading");

    expect(heading).toHaveStyle(`
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `);
  });

  it("should apply bold by default", () => {
    const { getByTestId } = setup();
    const heading = getByTestId("heading");

    expect(heading).toHaveStyle("font-weight: bold;");
  });

  it("as props works correctly", () => {
    // @ts-ignore
    const { getByTestId } = setup({ as: "h2" });
    const heading = getByTestId("heading");

    expect(heading.nodeName).toBe("H2");
  });
});
