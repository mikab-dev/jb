import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface IProps {
  children: React.ReactChildren;
}

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}