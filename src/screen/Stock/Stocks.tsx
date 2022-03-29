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

const Stocks = () => {
  const { productView, setProductView } = useContext(UserContext);
  //   console.log(productView);

 const Increament=()=>{

 }

 const Decreament=()=>{

}
  return (
    <div className="ml-96 mt-16">
      {productView.length ? (
        productView.map((product: any, ind: number) => {
          console.log(product);

          return (
            <div key={ind} className="w-fit h-auto bg-slate-900   mt-5">
              <table className="w-[70rem] h-auto text-sm text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs w-full text-gray-700 uppercase bg-slate-200 dark:bg-slate-900 dark:text-gray-400">
                  <tr>
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
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className=" p-4">
                      
                      <a
                        href={product.imageUrl}
                        key={ind}
                        target="_blank"
                        rel="noreferrer"
                      >
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
                
                    <td className="px-6 py-4">{product.quantity}</td>
                    <td className="px-0  py-4 text-right">
                      
                      <Button
                        style="w-20"
                        title="+"
                        onClick={Increament}
                      />
                    </td>
                    <td className="px-3 py-4 text-right">
                      <Button
                        style="w-20 hover:bg-red-600"
                        title="-"
                        onClick={Decreament}
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
    </div>
  );
};

export default Stocks;
