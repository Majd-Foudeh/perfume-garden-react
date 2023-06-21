import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function Layout({ children, hideNav, setHideNav }) {
  return (
    <>
      <Navbar hideNav={hideNav} setHideNav={setHideNav} />
      <main>{children}</main>
      <Footer hideNav={hideNav} />
    </>
  );
}
