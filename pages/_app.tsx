import type { AppProps } from "next/app";

import "../styles/globals.css";
import Layout from "../Presentationals/Layout";
import { AnimatePresence } from "framer-motion";

const GhostWrapper = ({ children }: any) => <>{children}</>;

export default function MyApp({ Component, pageProps, router }: any) {
  const Wrapper = router.route === "/" ? GhostWrapper : Layout;

  return (
    <AnimatePresence exitBeforeEnter>
      <Wrapper key={router.route === "/" ? "/" : "other"}>
        <Component {...pageProps} key={router.route} />
      </Wrapper>
    </AnimatePresence>
  );
}
