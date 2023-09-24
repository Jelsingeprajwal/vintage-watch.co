import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="max-w-[1360px] mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
