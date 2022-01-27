import { render, screen } from "utils/TestUtils";

import Home from "./index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /What Depositum Fidei means/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
