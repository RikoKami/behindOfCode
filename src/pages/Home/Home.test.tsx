import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from ".";

it("renders learn react link", () => {
  const { getByText } = render(<Home />, { wrapper: MemoryRouter });

  const linkElement = getByText(/Estudos com React/i);
  expect(linkElement).toBeInTheDocument();
});
