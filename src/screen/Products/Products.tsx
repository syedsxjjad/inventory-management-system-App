import React from "react";
import { Link } from "react-router-dom";
import ViewProduct from "./ViewProduct";
import AddProduct from "./AddProduct";
import Button from "../../component/Button";


const Products = () => {
  return (
    <>
      <div
        className=" w-9/12 h-auto m-auto ml-80 mt-24"
      >
        <Link to="/AddProduct">
          <Button
          title="Add Product"
          />
          {/* <div className="w-40 h-14 bg-slate-900 rounded-md li  max-w-xs hover:scale-110 transition duration-200 ease-in-out">
            <img className="w-10 h-10 ml-14  " src="add.png" />
         
            <span className="text-white ml-24 ">Add Product</span>
          </div> */}
        </Link>
        <div className="w-auto h-auto"></div>
        <ViewProduct />
      </div>
    </>
  );
};

export default Products;
