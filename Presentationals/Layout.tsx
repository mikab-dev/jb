import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { motion } from "framer-motion";

interface IProps {
  children: React.ReactChildren;
}

export default function Layout({ children }) {
  return (
    <motion.div
      className="h-screen"
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
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
}
