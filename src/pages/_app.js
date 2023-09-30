import Layout from "@/components/Layout";
import { GlobalProvider } from "@/contexts/GlobalContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </div>
  );
}
