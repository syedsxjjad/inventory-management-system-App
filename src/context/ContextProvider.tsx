// import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from "react";
import { db } from "../Firebase/Firebase";
import { UserContext } from "./Context";
import { collection, onSnapshot } from "firebase/firestore";

export const UsersData: React.FC = (props): React.ReactElement => {
  const [productView, setProductView] = React.useState([]);
  const [quantity, setQuantity] = React.useState();
  const [storeName, setStoreName] = React.useState();
  const [product, setProduct] = React.useState();
  const [viewStock, setViewStock] = React.useState();
  const [token, setToken] = React.useState<string | null>("");

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
    token,
    storeName,
    viewStock,
    productView,
    product,
    quantity,
    setToken,
    setStoreName,
    setViewStock,
    setProductView,
    setProduct,
    setQuantity,
  };
  return (
    <UserContext.Provider value={userDetails}>
      {props.children}
    </UserContext.Provider>
  );
};
