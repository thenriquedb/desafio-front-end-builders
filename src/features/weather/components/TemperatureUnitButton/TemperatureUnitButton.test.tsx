import { Providers } from "@test-utils/providers/Providers";
import { fireEvent, render } from "@testing-library/react";

import {
  TemperatureUnitButton,
  TemperatureUnitButtonProps,
} from "./TemperatureUnitButton";

function setup(props: TemperatureUnitButtonProps) {
  return render(
    <Providers>
      <TemperatureUnitButton {...props}>42</TemperatureUnitButton>
    </Providers>
  );
}

describe("<TemperatureUnitButton />", () => {
  it("should render unit correctly", () => {
    const { getByText } = setup({
      onClick: jest.fn(),
      unit: "F",
    });

    expect(getByText("°F")).toBeInTheDocument();
  });

  it("should call onClick correctly", () => {
    const onClick = jest.fn();
    const { getByTestId } = setup({
      onClick,
    });

    const button = getByTestId("temperature-button");
    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });
});
