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

import { UserContext } from "../../context/Context";
import ModalProduct from "./ModalProduct";

const ViewProduct = ({ productName }: any) => {
  const { productView, setProductView } = useContext(UserContext);

  // productView.sort();
  //Firebase Product Delete
  const ProductDelete = async (id: string) => {
    await deleteDoc(doc(db, "Inventory-Management", `${id}`));
  };

  return (
    <>
      {productView.length ? (
        productView

          // .filter((val:any) => productName ?  val.name === productName : true )
          .map((product: any, ind: number) => {
            // console.log(product, "product");

            return (
              <div key={ind} className="w-fit h-auto bg-slate-900   mt-5">
                <table className="w-[70rem] h-auto text-sm text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs w-full text-gray-700 uppercase bg-slate-200 dark:bg-slate-900 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-14">
                        Image
                      </th>
                      {/* <th scope="col" className="px-6 py-3">
                      Product Id
                    </th> */}
                      <th scope="col" className="px-6 py-3">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className=" p-4">
                        {/* {<img className="w-24 h-20" src={product.imageUrl} />} */}
                        <a
                          href={product.imageUrl}
                          key={ind}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img className="w-24 h-20" src={product.imageUrl} />
                        </a>
                      </td>
                      {/* <th
                      scope="row"
                      className="px-14 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {product.ProductId}
                    </th> */}
                      <td className="px-12 py-4">{product.name}</td>
                      <td className="px-6 py-4">{product.Price}</td>
                      <td className="px-6 py-4">{product.quantity}</td>
                      <td className="px-0  py-4 text-right">
                        <ModalProduct id={product.id} />
                      </td>
                      <td className="px-3 py-4 text-right">
                        <Button
                          style="bg-slate-600 w-auto text-black active:bg-blue-500 
                        font-bold px-6 py-3 rounded shadow  hover:shadow-lg hover:bg-red-700 outline-none focus:outline-none mr-1 mb-1"
                          title="Delete"
                          onClick={() => ProductDelete(product.id)}
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
