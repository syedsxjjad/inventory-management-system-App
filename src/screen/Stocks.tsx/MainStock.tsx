import React, { useContext, useEffect, useState } from "react";
import Input from "../../component/Input";
import { UserContext } from "../../context/Context";
import Stock from "./Stock";

import Store from "./Store";
import ViewStock from "./ViewStock";

const MainStock = () => {
  const { quantity, setQuantity } = useContext(UserContext);
  const { productView, setProductView } = useContext(UserContext);
  const { product, setProduct } = useContext(UserContext);

  // console.log(product);
  // useEffect(() => {
  //   setProductView(productView?.find((val: any) => val.Quantity === quantity));
  // }, [quantity]);
  // useEffect(()=>{

  // },[])

  return (
    <>
      {/* {productView?.map((Products: any, index: any) => {})} */}

      <div>
        <div className="w-[70rem] ml-96 mt-12 ">
          <div className="flex w-[70rem]   justify-around fixed bg-white py-8  ">
            <div>
              <Input
                style="w-72"
                type={"number"}
                placeholder={"Enter Quantity"}
                onChange={(e: any) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <div>
              <Store />
            </div>
            <div>
              <div className="w-72 h-32 ">
                <select
                  className="w-56 h-12 bg-slate-800 text-white rounded-lg"
                  onChange={(e: any) => {
                    setProduct(e.target.value);
                  }}
                >
                  {productView.map((Product: any, index: any) => (
                    <option value={Product.name} key={index}>{Product.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <Stock />
            </div>
          </div>
        </div>
        <div className="w-[70rem] h-96  ml-96 mt-60">
          <ViewStock />
        </div>
      </div>
    </>
  );
};

export default MainStock;
