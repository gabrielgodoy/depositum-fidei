import { render as rtlRender } from "@testing-library/react";
import { ComponentType, ReactElement } from "react";

const render = (ui: ReactElement) => {
  const Wrapper = ({ children }: { children: ReactElement }): ReactElement => {
    window.history.pushState({}, "Test page", "/");
    return children;
  };
  return rtlRender(ui, { wrapper: Wrapper as ComponentType });
};

export * from "@testing-library/react";
// override render method
export { render };
