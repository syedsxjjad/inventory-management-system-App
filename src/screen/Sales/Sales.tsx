import { async } from "@firebase/util";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Firebase/Firebase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../component/Loading";
import { UserContext } from "../../context/Context";
import Button from "../../component/Button";

interface ViewStockProps {
  id?: string;
  salesStoreValue: string;
  salesProductValue: string;
}

const Sales = ({ id, salesStoreValue, salesProductValue }: ViewStockProps) => {
  const [loading, setLoading] = useState(false);
  const { salesProduct, setSalesProduct } = useContext(UserContext);
  const { totalSales, setTotalSales } = useContext(UserContext);
  const { saleDate, setSaleDate } = useContext(UserContext);
  const { saleStoreName, setSaleStoreName } = useContext(UserContext);
  const { viewStock, setViewStock } = useContext(UserContext);
  const [findData, setFindData] = useState(null as any);
  const { saleQuantity, SetSaleQuantity } = useContext(UserContext);

  useEffect(() => {
    viewStock?.forEach((val: any) => {
      if (val.id === salesProduct) {
        setFindData(val);
      }
    });
  }, [salesProduct]);

  const AddSales = async (e: any) => {
    e.preventDefault();

    if (Number(saleQuantity) > Number(findData?.stockQuantity)) {
      alert("Quantity is not available");
      console.log("no");
      setLoading(false);
    } else {
      try {
        const docRef = await addDoc(
          collection(db, "Inventory-Management-Sales"),
          {
            saleQuantity,
            saleStoreName,
            salesProduct,
            totalSales,
            saleDate,
            SalesStoreName: salesStoreValue,
            SalesProductName: salesProductValue,
          }
        );
        console.log(docRef);
        toast.success("Create Successfully");

        viewStock.forEach(async (v: any) => {
          // console.log("viewStock23", v);

          if (v.id === salesProduct) {
            // console.log(v, "vvv");

            v.stockQuantity = v.stockQuantity - saleQuantity;
            // console.log(v.quantity, "sww");

            const washingtonRef = doc(
              db,
              "Inventory-Management-Stock",
              `${v.id}`
            );
            await updateDoc(washingtonRef, {
              saleQuantity: v.stockQuantity,
            });
          }
        });

        setLoading(false);
        console.log(docRef);
      } catch (error) {
        toast.error("Some Thing Wrong");
        console.log(error);
        setLoading(false);
      }
    }
  };
  return (
    <>
      {!loading ? (
        <Button style="w-30 h-12  " title="Add Sale" onClick={AddSales} />
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

export default Sales;
