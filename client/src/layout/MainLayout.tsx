import React from "react";
import Container from "~/componets/Container";
import Header from "~/componets/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
