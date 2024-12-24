"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";

import i18nConfig from "../../next-i18next.config";

// Components
import Header from "@/components/Header";

// Assets
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full py-6 px-10">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App, i18nConfig);
