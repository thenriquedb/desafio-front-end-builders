import { capitalize } from "./capitalize";

describe("capitalize", () => {
  it("should capitalize the first character", () => {
    const value = "lorem ipslum dollor";
    expect(capitalize(value)).toEqual("Lorem ipslum dollor");
  });

  it("should apply lower case on the rest", () => {
    const value = "LOREM IPSLUM DOLLOR";
    expect(capitalize(value)).toEqual("Lorem ipslum dollor");
  });
});
