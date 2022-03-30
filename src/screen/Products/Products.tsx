import React, { useState } from "react";
import { Link } from "react-router-dom";
import ViewProduct from "./ViewProduct";
import AddProduct from "./AddProduct";
import Button from "../../component/Button";
import DropDown from "../../component/DropDown";


const Products = () => {
  const [serchProduct,setSearchProduct]=useState<any>("")
  console.log(serchProduct,"searchProduct");
  
  return (
    <>
   

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
      <DropDown setSearchProduct={setSearchProduct}/>
   
      </div>
      </div>
        <div className=" w-96 h-screen mt-48 mr-60 ">
        <ViewProduct productName={serchProduct.name} /> 
          </div> 
     
  
    
    </>
  );
};

export default Products;
