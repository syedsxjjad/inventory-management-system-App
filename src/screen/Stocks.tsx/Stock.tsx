import { async, validateCallback } from "@firebase/util";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../component/Button";
import { UserContext } from "../../context/Context";
import { db } from "../../Firebase/Firebase";
import Loading from "../../component/Loading";

interface ViewProductProps {
  id?: string;
  StockValue?: string;
}

const Stock = ({ id, StockValue }: ViewProductProps) => {
  const { stockQuantity, setStockQuantity } = useContext(UserContext);
  const { storeName, setStoreName } = useContext(UserContext);
  const { productView, setProductView } = useContext(UserContext);
  const { stockProduct, setStockProduct } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [findData, setFindData] = useState(null as any);
  // console.log(findData, "finddata");
  // console.log(product, "product");

  // console.log(productView,"Storename");
  // console.log(product,"Productname");

  // useEffect(() => {
  //   if (productView) setProduct(productView?.[0]?.id);
  //   setQuantity(0);
  // }, [productView]);
  // console.log(product, "pro");
  // console.log(productView, "proView");
  console.log(StockValue, "RefValue");

  useEffect(() => {
    productView?.forEach((val: any) => {
      if (val.id === stockProduct) {
        setFindData(val);
      }
    });
  }, [stockProduct]);

  const AddStock = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (Number(stockQuantity) > Number(findData?.quantity)) {
      alert("Quantity is not available");
      console.log("no");
      setLoading(false);
    } else {
      try {
        const docRef = await addDoc(
          collection(db, "Inventory-Management-Stock"),
          {
            stockQuantity,
            stockProduct,
            storeName,
            name: StockValue,
          }
        );
        console.log(docRef);
        toast.success("Create Successfully");
        console.log({ productView });
        productView.forEach(async (v: any) => {
          if (v.id === stockProduct) {
            console.log(v, "bbvv");

            v.quantity = v.quantity - stockQuantity;

            const washingtonRef = doc(db, "Inventory-Management", `${v.id}`);
            await updateDoc(washingtonRef, {
              quantity: v.quantity,
            });
          }
        });
        setLoading(false);
        // console.log(docRef);
      } catch (error) {
        toast.error("Some Thing Wrong");
        console.log(error);
        setLoading(false);
      }
    }

    setStockQuantity("");
    setStockProduct("");
    setStoreName("");
  };

  return (
    <>
      {!loading ? (
        <Button style="w-32 h-12 " title="Add Stock" onClick={AddStock} />
      ) : (
        <Loading style="mt-62" />
      )}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Stock;
