import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/Context";

const AdminPanel = () => {
  const { productView, setProductView } = useContext(UserContext);

  console.log(productView);

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
        <Link to="/Products">
          <div
            className="w-96 h-40 rounded-md  bg-slate-900 shadow-xl
                max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          >
            <br />
            <label className=" text-white font text-2xl ml-20 font-sans">
              Total Sell
            </label>
            <br />
            <span className=" text-white  font text-2xl px-36  ">
              {productView.length}
            </span>
          </div>
        </Link>
      </div>
      );
    </>
  );
};

export default AdminPanel;
