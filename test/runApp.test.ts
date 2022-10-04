import { runApp } from "../src/app/runApp";

describe("runApp", () => {
  it("is a function", () => {
    expect(runApp).toBeInstanceOf(Function);
  });
});
