import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import Button from "../../component/Button";
import Loading from "../../component/Loading";
import { UserContext } from "../../context/Context";
import { db } from "../../Firebase/Firebase";

const ViewStock = () => {
  const { viewStock, setViewStock } = useContext(UserContext);

  //Firebase Product Delete
  const ProductDelete = async (id: string) => {
    await deleteDoc(doc(db, "Inventory-Management-Stock", `${id}`));
  };
  console.log("viewStock", viewStock);

  return (
    <>
      {/* {viewStock.length ? ( */}
      {
        viewStock?.map((stock: any, index: any) => {
          console.log("stock", stock);

          return (
            <div key={index} className="w-9/12 h-auto bg-black mt-4">
              <div className="w-fit h-auto bg-slate-900 mt-5">
                <table className="w-[70rem] h-auto text-sm text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs w-full text-gray-700 uppercase bg-slate-200 dark:bg-slate-900 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px- py-3">
                        Product Quantity
                      </th>
                      <th scope="col" className="px-  py-3">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Store Name
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-12 py-4">{stock.quantity}</td>
                      <td className="px-6 py-4">{stock.product}</td>
                      <td className="px-6 py-4">{stock.storeName}</td>
                      <td className="px-0  py-4 text-right"></td>

                      <td className="px-3 py-4 text-right">
                        <Button
                          style="bg-slate-600 w-auto text-black active:bg-blue-500 
                        font-bold px-6 py-3 rounded shadow  hover:shadow-lg hover:bg-red-700 outline-none focus:outline-none mr-1 mb-1"
                          title="Delete"
                          onClick={() => ProductDelete(stock.id)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })
        /* ) : (
        <Loading style=" w-32 h-32 ml-96 mt-60 " />
      ) */
      }
    </>
  );
};

export default ViewStock;
