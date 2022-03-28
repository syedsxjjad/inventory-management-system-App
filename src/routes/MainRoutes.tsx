import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screen/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRoutes = () => {
  const [publicOrProtected, setPublicOrProtected] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "")
// console.log("tokne", token)
  // let token = true;

  // let token: any = localStorage.getItem("token");

  useEffect(() => {
    // console.log("token", token)
    if (token?.length) {
      setPublicOrProtected(true);
    } else {
      setPublicOrProtected(false);
    }
  }, []);

  return (
    <>
    {/* {token.length? <ProtectedRoutes />:  <PublicRoutes />} */}
    
      <Routes>
        {publicOrProtected ? (
          <Route path="*" element={<ProtectedRoutes />} />
        ) : (
          <Route path="*" element={<PublicRoutes />} />
        )}
      </Routes>
    </>
  );
};

export default MainRoutes;
