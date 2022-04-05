import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/Context";
import ViewStock from "../Stocks.tsx/ViewStock";

const AdminPanel = () => {
  const { productView, setProductView } = useContext(UserContext);
  const { viewStock, setViewStock } = useContext(UserContext);
  const { viewSales, setViewSales } = useContext(UserContext);

  // console.log(productView);

  return (
    <>
      return (
      <div className="flex gird grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-20 mt-24  ml-80">
        <Link to="/Products">
          <div
            className="w-96 h-40 rounded-md  bg-slate-900 shadow-xl
                max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          >
            <br />
            <label className=" text-white font text-2xl ml-20 font-sans">
              Total Products
            </label>
            <br />
            <span className=" text-white  font text-2xl px-36  ">
              {productView.length}
            </span>
          </div>
        </Link>
        <Link to="/Stock">
          <div
            className="w-96 h-40 rounded-md  bg-slate-900 shadow-xl
                max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          >
            <br />
            <label className=" text-white font text-2xl ml-24 font-sans">
              Total Stock
            </label>
            <br />
            <span className=" text-white  font text-2xl px-36  ">
              {viewStock.length}
            </span>
          </div>
        </Link>
        <Link to="/Sales">
          <div
            className="w-96 h-40 rounded-md  bg-slate-900 shadow-xl
                max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          >
            <br />
            <label className=" text-white font text-2xl ml-24 font-sans">
              Total Sales
            </label>
            <br />
            <span className=" text-white  font text-2xl px-36  ">
              {viewSales.length}
            </span>
          </div>
        </Link>
      </div>
      );
    </>
  );
};

export default AdminPanel;
