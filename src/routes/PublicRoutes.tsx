import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../screen/Login";
// import Logout from "../screen/Logout";
import Signup from "../screen/Signup";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        {/* <Route path="/Login" element={<Logout />}></Route> */}
      </Routes>
    </>
  );
};

export default PublicRoutes;
