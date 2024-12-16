import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full py-6 px-10">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default wrapper.withRedux(App);
