import type { AppProps } from "next/app";
import { motion } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      transition={{ duration: 0.75 }}
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          backgroundColor: "white",
          filter: `invert()`,
          opacity: 0,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
