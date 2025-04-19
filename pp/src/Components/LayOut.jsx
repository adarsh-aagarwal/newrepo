// src/Layout.jsx
// import React from "react";

// import NavBar from "./NavBar"// extract your navbar into its own component
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

// const Layout = () => {
//   return (
//     <>
//       <NavBar />
//       <main>
//         <Outlet /> {/* All child pages will render here */}
//       </main>
//       <Footer/>
//     </>
//   );
// };

// export default Layout;


import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
    </>
  );
};

export default Layout;
