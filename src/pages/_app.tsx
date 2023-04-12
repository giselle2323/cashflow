import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import "../styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// The error is occurring because the MyApp component is receiving a prop initialSession which is not recognized as a valid prop by the AppProps interface. To fix this, you can define a new interface that extends AppProps and includes the initialSession prop.


interface AppPropsWithSession extends AppProps {
  initialSession: Session;
}

type AppPropsWithLayout = AppPropsWithSession & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />{" "}
    </SessionContextProvider>
  );
}
