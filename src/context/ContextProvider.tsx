// import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from "react";
import { db } from "../Firebase/Firebase";
import { UserContext } from "./Context";
import { collection, onSnapshot } from "firebase/firestore";

export const UsersData: React.FC = (props): React.ReactElement => {
  const [productView, setProductView] = React.useState([]);
  const [stockQuantity, setStockQuantity] = React.useState();
  const [saleQuantity, SetSaleQuantity] = React.useState();
  const [storeName, setStoreName] = React.useState();
  const [stockProduct, setStockProduct] = React.useState();
  const [viewStock, setViewStock] = React.useState();
  const [token, setToken] = React.useState<string | null>("");
  const [totalSales, setTotalSales] = React.useState(0);
  const [saleDate, setSaleDate] = React.useState();
  const [saleStoreName, setSaleStoreName] = React.useState();
  const [viewSales, setViewSales] = React.useState();
  const [salesProduct, setSalesProduct] = React.useState();

  // console.log("productView", productView)
  useEffect(() => {
    onSnapshot(collection(db, "Inventory-Management"), (snapshoot: any) => {
      setProductView(
        snapshoot.docs.map((doc: any) => {
          //   console.log(doc);
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    onSnapshot(
      collection(db, "Inventory-Management-Stock"),
      (snapshoot: any) => {
        setViewStock(
          snapshoot.docs.map((doc: any) => {
            console.log("docs", doc);
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      }
    );
  }, []);

  useEffect(() => {
    onSnapshot(
      collection(db, "Inventory-Management-Sales"),
      (snapshoot: any) => {
        setViewSales(
          snapshoot.docs.map((doc: any) => {
            // console.log(doc);
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      }
    );
  }, []);

  //   const [isCalling, setIsCalling] = React.useState<boolean>(true);
  //   React.useEffect(() => {
  //     const getToken = sessionStorage.getItem('token');
  //     setToken(getToken);
  //   }, []);
  const userDetails = {
    totalSales,
    token,
    storeName,
    viewStock,
    productView,
    stockProduct,
    stockQuantity,
    saleQuantity,
    saleDate,
    saleStoreName,
    viewSales,
    salesProduct,
    setSalesProduct,
    setViewSales,
    setSaleStoreName,
    setSaleDate,
    SetSaleQuantity,
    setToken,
    setStoreName,
    setViewStock,
    setProductView,
    setStockProduct,
    setStockQuantity,
    setTotalSales,
  };
  return (
    <UserContext.Provider value={userDetails}>
      {props.children}
    </UserContext.Provider>
  );
};
