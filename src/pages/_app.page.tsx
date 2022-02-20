import "assets/styles/globals.scss";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";

import { createEmotionCache } from "../createEmotionCache";
import { theme } from "../mui-theme";
import { store } from "../redux/store";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: AppProps & { emotionCache: EmotionCache }) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme.light}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
