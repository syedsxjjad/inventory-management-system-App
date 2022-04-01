import React, { useEffect, useState } from "react";

import AdminPanel from "./AdminPanel";
import Sidebar from "../../component/Sidebar";

function AdminDashboard() {
  useEffect(() => {
    const token: any = localStorage.getItem("token");
  }, []);
  return (
    <>
      <AdminPanel />
    </>
  );
}
export default AdminDashboard;
