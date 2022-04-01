import { async, validateCallback } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../component/Button";
import { UserContext } from "../../context/Context";
import { db } from "../../Firebase/Firebase";
import Loading from "../../component/Loading";

const Stock = () => {
  const { quantity, setQuantity } = useContext(UserContext);

  const { storeName, setStoreName } = useContext(UserContext);
  const { productView, setProductView } = useContext(UserContext);
  const { product, setProduct } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [findData, setFindData] = useState(null as any);

  // console.log(productView,"Storename");
  // console.log(product,"Productname");

  // useEffect(() => {
  //   if (productView) setProduct(productView?.id);
  //     setQuantity(0);
  // }, [productView]);

  useEffect(()=>{
    console.log(1111);
    productView?.forEach((val: any) => {
      if(val.name === product){
        setFindData(val)
      }
    });
  },[product])

  const AddStock = async (e: any) => {
    e.preventDefault();
    setLoading(true);


    console.log(typeof findData?.quantity);
    console.log(typeof quantity);

    if (Number(quantity) > Number(findData?.quantity)) {
      alert("Quantity is not available");
      setLoading(false);
    } else {
      try {
        const docRef = await addDoc(
          collection(db, "Inventory-Management-Stock"),
          {
            quantity,
            product,
            storeName,
          }
        );
        // console.log(docRef)
        toast.success("Create Successfully");

        // setProductView((pre: any) => {
        //   return pre?.map((val: any) => {
        //     if (val.id === product)
        //       return {
        //         ...val,
        //         quantity: String(Number(val.quantity) - Number(quantity)),
        //       };
        //     return val;
        //   });
        // });

        setLoading(false);
        // console.log(docRef);
      } catch (error) {
        toast.error("Some Thing Wrong");
        console.log(error);

        setLoading(false);
      }
    }

    // setQuantity("");
    setProduct("");
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
