import React from "react";
import { Link } from "react-router-dom";
import ViewProduct from "./ViewProduct";
import AddProduct from "./AddProduct";
import Button from "../../component/Button";
import DropDown from "../../component/DropDown";


const Products = () => {
  return (
    <>
   
   {/* <div className=" h-auto"> */}
     <div className="ml-96 flex justify-between  ">
      <div
        className=" h-36 w-[70rem] fixed bg-white  py-16 mt-12"
      >
        <Link to="/AddProduct">
          <Button
          title="Add Product"
          />
        </Link>
        </div>
        <div className="absolute  ml-[52rem]  mt-24 ">
      <DropDown />
   
      </div>
      </div>
        <div className=" w-96 h-screen mt-48 mr-60 ">
        <ViewProduct /> 
          </div> 
     
    {/* </div> */}
    
    </>
  );
};

export default Products;
