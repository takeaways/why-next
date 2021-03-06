import React from "react";

import Navbar from "components/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
