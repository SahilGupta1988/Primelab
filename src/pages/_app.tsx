import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "store";
import { ThemeProvider } from "@mui/material";
import { theme, GlobalStyles } from "theme";
import { Modals } from "containers";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, props: any) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page: any) => page);

  const ComponentWithLayout = getLayout(
    <Component {...pageProps} key={router.route} />,
    pageProps
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Modals />
        {ComponentWithLayout}
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
