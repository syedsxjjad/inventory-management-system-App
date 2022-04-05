import React, { useContext, useRef, useState } from "react";
import Input from "../../component/Input";
import { UserContext } from "../../context/Context";
import Store from "../Stocks.tsx/Store";
import Sales from "./Sales";
import ViewSales from "./ViewSales";

const MainSales = () => {
  const { viewStock, setViewStock } = useContext(UserContext);
  const { saleQuantity, SetSaleQuantity } = useContext(UserContext);
  const { salesProduct, setSalesProduct } = useContext(UserContext);
  const { totalSales, setTotalSales } = useContext(UserContext);
  const { saleDate, setSaleDate } = useContext(UserContext);
  const { saleStoreName, setSaleStoreName } = useContext(UserContext);

  const RefStore: any = useRef(0);
  const RefProduct: any = useRef(0);
  const SalesStoreRef = RefStore.current.label;
  const SalesProducteRef = RefProduct.current.label;
  // console.log("SalesStoreRef", SalesStoreRef);
  // console.log("SalesProducteRef", SalesProducteRef);

  const Sale = () => {
    return setTotalSales(saleQuantity * 100);
  };
  Sale();

  return (
    <>
      <div>
        <div className="w-[70rem] ml-80 mt-12">
          <div className="flex w-[78rem]   justify-around fixed bg-white py-8  ">
            <div>
              <Input
                style="w-40 "
                type={"Date"}
                placeholder={"Enter Quantity"}
                onChange={(e: any) => {
                  setSaleDate(e.target.value);
                }}
              />
            </div>
            <div>
              <Input
                style="w-36"
                type={"number"}
                placeholder={"Enter Quantity"}
                onChange={(e: any) => {
                  SetSaleQuantity(e.target.value);
                }}
              />
            </div>

            <div>
              <div className="w-52 h-32 ">
                <select
                  className="w-52 h-12 bg-slate-800 text-white rounded-lg"
                  onChange={(e: any) => {
                    setSalesProduct(e.target.value);
                  }}
                >
                  {viewStock?.map((Product: any, index: any) => {
                    console.log(Product, "ViewStock");

                    return (
                      <option
                        key={index}
                        value={Product.id}
                        ref={RefProduct}
                        label={Product.name}
                      >
                        {Product.name}
                      </option>
                    );
                  })}
                  {/* {console.log(viewStock.label, "ssuwj")} */}
                </select>
              </div>
            </div>
            <div className="w-52 h-32 ">
              <select
                className="w-52 h-12 bg-slate-800 text-white rounded-lg"
                onChange={(e: any) => {
                  setSaleStoreName(e.target.value);
                }}
              >
                {viewStock?.map((Product: any, index: any) => {
                  //   console.log(viewStock, "viewStock1");

                  return (
                    <option
                      key={index}
                      value={Product.id}
                      ref={RefStore}
                      label={Product.storeName}
                    >
                      {Product.storeName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <h1 className="w-36 py-3 h-12 bg-slate-800 text-white rounded-lg">
                Total Sales : {totalSales}
              </h1>
            </div>
            <div>
              {
                <Sales
                  salesStoreValue={SalesStoreRef}
                  salesProductValue={SalesProducteRef}
                />
              }
            </div>
          </div>
        </div>
        <div className="w-[70rem] h-96  ml-96 mt-60">{<ViewSales />}</div>
      </div>
    </>
  );
};

export default MainSales;
