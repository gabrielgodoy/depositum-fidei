import { Store } from "@reduxjs/toolkit";
import { render as rtlRender } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "redux/store";

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  locale: "",
  isFallback: false,
  isLocaleDomain: false,
  isReady: false,
  isPreview: false,
};

type DefaultParams = Parameters<typeof rtlRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

const render = (
  ui: RenderUI,
  { wrapper, router, ...options }: RenderOptions = {},
) => {
  if (!wrapper) {
    wrapper = ({ children }) => (
      <Provider store={store}>
        <RouterContext.Provider value={{ ...mockRouter, ...router }}>
          {children}
        </RouterContext.Provider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper, ...options });
};

export * from "@testing-library/react";
// override render method
export { render };
