import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../screen/Login";

import Signup from "../screen/Signup";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
