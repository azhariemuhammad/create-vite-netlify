import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";

import Home from "../pages/Home";

export const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);
