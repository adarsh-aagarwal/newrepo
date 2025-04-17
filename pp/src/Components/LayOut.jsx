// src/Layout.jsx
import React from "react";

import NavBar from "./NavBar"// extract your navbar into its own component
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet /> {/* All child pages will render here */}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
