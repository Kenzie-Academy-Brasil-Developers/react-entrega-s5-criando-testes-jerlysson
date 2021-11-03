import { render, screen } from "@testing-library/react";

import Search from "../../components/Search/index";

describe("search components:", () => {
  test("should be able to render an input", () => {
    render(<Search />);
    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
