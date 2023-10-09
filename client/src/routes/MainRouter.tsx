import React from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "~/layout/MainLayout";
import Home from "~/pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      {/* Main */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  )
);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
