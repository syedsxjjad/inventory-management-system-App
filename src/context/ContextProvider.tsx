// import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from "react";
import { db } from "../Firebase/Firebase";
import { UserContext } from "./Context";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

export const UsersData: React.FC = (props): React.ReactElement => {
  const [productView, setProductView] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [stockQuantity, setStockQuantity] = React.useState();
  const [saleQuantity, SetSaleQuantity] = React.useState();
  const [storeName, setStoreName] = React.useState();
  const [stockProduct, setStockProduct] = React.useState({ id: "", name: "" });
  const [viewStock, setViewStock] = React.useState();
  const [token, setToken] = React.useState<string | null>("");
  const [totalSales, setTotalSales] = React.useState();
  const [saleDate, setSaleDate] = React.useState();
  const [saleStoreName, setSaleStoreName] = React.useState({
    id: "",
    name: "",
  });
  const [viewSales, setViewSales] = React.useState();
  const [salesProduct, setSalesProduct] = React.useState({ id: "", name: "" });
  // console.log("productView", productView)

  useEffect(() => {
    const collectionref = collection(db, "Inventory-Management");
    const q = query(collectionref, orderBy("quantity", "desc"));

    const sort = onSnapshot(
      q,

      (snapshoot: any) => {
        setProductView(
          snapshoot.docs.map((doc: any) => {
            //   console.log(doc);
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      }
    );

    return sort;
  }, []);

  useEffect(() => {
    onSnapshot(
      collection(db, "Inventory-Management-Stock"),

      (snapshoot: any) => {
        setViewStock(
          snapshoot.docs.map((doc: any) => {
            // timeStamp: serverTimestamp();
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
    email,
    setEmail,
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
