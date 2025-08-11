import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<
  P extends object = Record<string, unknown>,
  IP = P
> = NextPage<P, IP> & {
  Layout?: ({ children }: { children: ReactNode }) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: NextPageWithLayout) {
  const Layout = Component.Layout ?? ((page) => page);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
