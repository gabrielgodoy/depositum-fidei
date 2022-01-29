import { render, screen } from "utils/TestUtils";

import Home from "./index";

describe("Home", () => {
  it("should render a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /what-depositum-fidei-means/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
