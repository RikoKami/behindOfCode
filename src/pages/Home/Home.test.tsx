import { render } from "@testing-library/react";
import { Home } from ".";

test("renders learn react link", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Estudos com React/i);
  expect(linkElement).toBeInTheDocument();
});
