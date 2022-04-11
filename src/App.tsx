import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import ViewProduct from "./screen/Products/ViewProduct";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ModalProduct from "./screen/Products/ModalProduct";
import { UsersData } from "./context/ContextProvider";
import Login from "./screen/Login";

function App() {
  return (
    <>
      <UsersData>
        <MainRoutes />
        {/* <Login /> */}
      </UsersData>
    </>
  );
}

export default App;
