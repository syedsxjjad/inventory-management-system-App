import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";

const Logout = () => {
  let navigate = useNavigate();
  const logout = () => {
    
    let token: any = localStorage.getItem("token");
 
    //window.localStorage.removeItem("token");
    // window.localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <button
        onClick={logout}
        className="focus:outline-none flex bg-slate-700 py-2 px-12
                   mt-96 pt-3 rounded-md text-white hover:bg-slate-500 
                   cursor-pointer "
      >
        <span className=" font-semibold">Logout</span>
      </button>
    </>
  );
};

export default Logout;
