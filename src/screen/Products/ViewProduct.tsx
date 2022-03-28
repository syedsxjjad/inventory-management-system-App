import { useContext, useEffect, useState } from "react";
import {
  updateDoc,
  deleteDoc,
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";
// import { db } from "../../Firebase/Firebase";
import { db } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import Loading from "../../component/Loading";
import EditProducts from "./EditProducts";
import Button from "../../component/Button";
import { async } from "@firebase/util";
import { UserContext } from "../../context/Context";

// interface ViewProductProps {
//     ProductId: Number,
//     name: string,
//     Price: Number,
//     Description: string,
//     quantity: Number,
//     imageUrl: string,
// };

const ViewProduct = () => {
  const {productView, setProductView} = useContext(UserContext);
  //   console.log(productView);

  useEffect(() => {
    onSnapshot(collection(db, "Inventory-Management"), (snapshoot) => {
      setProductView(
        snapshoot.docs.map((doc) => {
          //   console.log(doc);
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  // const ProductDelete = async (id: string) => {
  //   await deleteDoc(doc(db, "Inventory-Management", `${id}`));
  // };

  return (
    <>
      {productView.length ? (
        productView.map((product: any, ind:number) => {
          console.log(product);

          return (
            <div key={ind} className="w-full bg-slate-900  mt-5">
              <table className="w-full  text-sm text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs w-full text-gray-700 uppercase bg-slate-200 dark:bg-slate-900 dark:text-gray-400">
                  <tr >
                    <th scope="col" className="px-14">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className=" p-4">
                      {/* {<img className="w-24 h-20" src={product.imageUrl} />} */}
					  <a href={product.imageUrl} key={ind} target="_blank" rel="noreferrer">
                        <img className="w-24 h-20" src={product.imageUrl} />
                      </a>
                    </td>
                    <th
                      scope="row"
                      className="px-14 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {product.ProductId}
                    </th>
                    <td className="px-12 py-4">{product.name}</td>
                    <td className="px-6 py-4">{product.Price}</td>
                    <td className="px-6 py-4">{product.quantity}</td>
                    <td className="px-0  py-4 text-right">
                      {/* <Link
                        onChange={() => ProductDelete(product.id)}
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link> */}
                      <Button
                        style="w-20"
                        title="Edit"
                        // onClick={()=>ProductDelete(product.id)}
                      />
                    </td>
                    <td className="px-3 py-4 text-right">
                      {/* <Link  to="/EditProducts" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</Link> */}
                      <Button
                        style="w-20 hover:bg-red-600"
                        title="Delete"
                        // onClick={() => ProductDelete(product.id)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      ) : (
        <Loading style=" w-32 h-32 ml-96 mt-32 " />
      )}
    </>
  );
};

export default ViewProduct;
