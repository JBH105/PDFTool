import Layout from "@/components/Layout";
import { GlobalProvider } from "@/contexts/GlobalContext";
import "@/styles/globals.css";
import { useEffect } from "react";
import { googleAnalyticsActions } from "../../utils/google_analytics";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    googleAnalyticsActions.initGoogleAnalytics("G-SGP7QRHW8V");
  }, []);
  return (
    <div>
      <Analytics />
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </div>
  );
}
