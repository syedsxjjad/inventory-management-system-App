import { deleteDoc, doc } from "firebase/firestore";
import React, { useContext } from "react";
import Button from "../../component/Button";
import { UserContext } from "../../context/Context";
import { db } from "../../Firebase/Firebase";

const ViewSales = () => {
  const { viewSales, setViewSales } = useContext(UserContext);
  //   console.log(viewSales, "sdd");

  const SalesDelete = async (id: string) => {
    await deleteDoc(doc(db, "Inventory-Management-Sales", `${id}`));
  };

  return (
    <>
      {/* {viewStock.length ? ( */}
      {
        viewSales?.map((sales: any, index: any) => {
          console.log(sales, "Sales");

          return (
            <div key={index} className="w-9/12 h-auto bg-black mt-4">
              <div className="w-fit h-auto bg-slate-900 mt-5">
                <table className="w-[70rem] h-auto text-sm text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs w-full text-gray-700 uppercase bg-slate-200 dark:bg-slate-900 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px- py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-16 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-  py-3">
                        Product Name
                      </th>
                      <th scope="col" className="px- py-3">
                        Store Name
                      </th>
                      <th scope="col" className="px- py-3">
                        Sales Price
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4">{sales.saleQuantity}</td>
                      <td className="px-12 py-4">{sales.saleDate}</td>
                      <td className="px-6 py-4">{sales.SalesProductName}</td>
                      <td className="px-6 py-4">{sales.SalesStoreName}</td>
                      <td className="px-6 py-4">{sales.totalSales}</td>
                      <td className="px-0  py-4 text-right"></td>

                      <td className="px-3 py-4 text-right">
                        <Button
                          style="bg-slate-600 w-auto text-black active:bg-blue-500 
                        font-bold px-6 py-3 rounded shadow  hover:shadow-lg hover:bg-red-700 outline-none focus:outline-none mr-1 mb-1"
                          title="Delete"
                          onClick={() => SalesDelete(sales.id)}
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

export default ViewSales;
