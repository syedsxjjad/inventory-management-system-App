import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AdminDashboard from "../screen/Admin/AdminDashboard";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import Logout from "../screen/Logout";
import Sidebar from "../component/Sidebar";
import AddProduct from "../screen/Products/AddProduct";
import ViewProduct from "../screen/Products/ViewProduct";
import Products from "../screen/Products/Products";
import Stock from "../screen/Stocks.tsx/Stock";

import MainStock from "../screen/Stocks.tsx/MainStock";
import ViewStock from "../screen/Stocks.tsx/ViewStock";






// const Invoices=()=> {
//   return (
//     <div>
//       <Sidebar/>
//       <Outlet/>
//     </div>
//   );
// }

const ProtectedRoutes = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Routes>
      <Route path="*" element={<AdminDashboard/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/ViewProduct" element={<ViewProduct/>}/>
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Login" element={<Logout />}/>
        <Route path="/Stock" element={<Stock/>}/>
       
        <Route path="/MainStock" element={<MainStock/>}/>
        <Route path="/ViewStock" element={<ViewStock/>}/>
    
        
      </Routes>
    </div>
  );
};

export default ProtectedRoutes;
