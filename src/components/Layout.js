import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Router } from "next/router";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };

    const stopLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 400);
    };

    // Subscribe to route change events to show/hide the loader
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);
  return (
    <div>
      <Header />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="spinner"></div>
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
}
