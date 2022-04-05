import { Label } from "@headlessui/react/dist/components/label/label";
import React, { useContext, useEffect, useState, useRef } from "react";
import Input from "../../component/Input";
import { UserContext } from "../../context/Context";
import Stock from "./Stock";

import Store from "./Store";
import ViewStock from "./ViewStock";

const MainStock = () => {
  const { stockQuantity, setStockQuantity } = useContext(UserContext);
  const { productView, setProductView } = useContext(UserContext);
  const { stockProduct, setStockProduct } = useContext(UserContext);

  // const [stockProduckName, setStockProduckName] = useState("");
  const RefProduct: any = useRef(null);
  // console.log(RefProduct, "ssdss");
  console.log(stockProduct, "eeeee");

  // const ProductRef = RefProduct.current;
  // console.log(ProductRef, "doc");

  // console.log("stockProduct", stockProduct);
  // console.log(product.current.label, "gggg");
  // useEffect(() => {
  //   setProductView(productView?.find((val: any) => val.Quantity === quantity));
  // }, [quantity]);
  // useEffect(()=>{

  // },[])

  return (
    <>
      <div>
        <div className="w-[70rem] ml-96 mt-12 ">
          <div className="flex w-[70rem]   justify-around fixed bg-white py-8  ">
            <div>
              <Input
                style="w-72"
                type={"number"}
                placeholder={"Enter Quantity"}
                onChange={(e: any) => {
                  setStockQuantity(e.target.value);
                }}
              />
            </div>
            <div>
              <Store />
            </div>
            <div>
              <div className="w-72 h-32">
                <select
                  className="w-56 h-12 bg-slate-800 text-white rounded-lg"
                  onChange={(e: any) => {
                    setStockProduct(e.target.value);
                  }}
                >
                  {productView.map((stockProduct: any, index: any) => (
                    <option
                      key={index}
                      // ref={RefProduct}
                      value={stockProduct.id}
                      label={stockProduct.name}
                    >
                      {console.log(stockProduct.name, "hhhh")}
                      {stockProduct.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <Stock StockValue={productView.name} />
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
