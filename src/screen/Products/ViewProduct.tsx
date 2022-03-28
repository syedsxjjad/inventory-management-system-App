import { useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
// import { db } from "../../Firebase/Firebase";
import { db } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";


// interface ViewProductProps {
//     ProductId: Number,
//     name: string,
//     Price: Number,
//     Description: string,
//     quantity: Number,
//     imageUrl: string,
// };

const ViewProduct = () => {
  const [productView, setProductView] = useState<any[]>([]);
  console.log(productView);

  useEffect(() => {
    onSnapshot(collection(db, "Inventory-Management"), (snapshoot) => {
      setProductView(
        snapshoot.docs.map((doc) => {
          console.log(doc);
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  return (
    <>
      {productView.map((product, ind) => {
        console.log(product);
      
        return (
          <div
            key={ind}
            className="w-full bg-slate-900  mt-5"
          >
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs w-full text-gray-700 uppercase bg-slate-200 dark:bg-slate-900 dark:text-gray-400">
					<tr>
						<th scope="col" className="p-4">
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
					<tr
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td className=" p-4">
                        {<img className="w-20 h-20" src={product.imageUrl}/>}
						</td>
						<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {product.ProductId}
						</th>
						<td className="px-6 py-4">
                        {product.name}
						</td>
						<td className="px-6 py-4">
                        {product.Price}
						</td>
						<td className="px-6 py-4">
                        {product.quantity}
						</td>
						<td className="px-6 py-4 text-right">
							<Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
						</td>
                        <td className="px-6 py-4 text-right">
							<Link to="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delet</Link>
						</td>
					</tr>
					

				</tbody>
			</table>
          </div>
        );
      })}
    </>
  );
};

export default ViewProduct;
