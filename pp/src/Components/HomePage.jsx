// import React from "react";
// import NavBar from "./NavBar";
// import BlogCards from "./BlogCards";

// const HomePage = () => {
//   return (
//     <>
      
//       <BlogCards />
//     </>
//   );
// };

// export default HomePage;


import React from "react";
import { useOutletContext } from "react-router-dom";
import BlogCards from "./BlogCards";

const HomePage = () => {
  const { searchQuery } = useOutletContext();

  return <BlogCards searchQuery={searchQuery} />;
};

export default HomePage;


