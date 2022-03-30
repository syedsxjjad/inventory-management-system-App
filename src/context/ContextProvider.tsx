// import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from '../Firebase/Firebase';
import { UserContext } from './Context' 

import {
  updateDoc,
  deleteDoc,
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";

export const UsersData: React.FC = (props): React.ReactElement => {
  const [productView, setProductView] = React.useState([]);
  console.log("productView", productView)
  useEffect(() => {
    onSnapshot(collection(db, "Inventory-Management"), (snapshoot:any) => {
      setProductView(
        snapshoot.docs.map((doc:any) => {
          //   console.log(doc);
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);


//   const [token, setToken] = React.useState<string | null>('');
//   const [isCalling, setIsCalling] = React.useState<boolean>(true);
//   React.useEffect(() => {
//     const getToken = sessionStorage.getItem('token');
//     setToken(getToken);
//   }, []);
  const userDetails = {
  productView,
  setProductView,
  };
  return <UserContext.Provider value={userDetails}>{props.children}</UserContext.Provider>;
};
