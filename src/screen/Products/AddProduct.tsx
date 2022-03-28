import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import AddImage from "../../component/AddImage";
import Button from "../../component/Button";
import Input from "../../component/Input";
import { db } from "../../Firebase/Firebase";
import Loading from "../../component/Loading";
import Sidebar from "../../component/Sidebar";
import TextArea from "../../component/TextArea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [addProducts, setAddProducts] = useState({
    ProductId: "",
    name: "",
    Price: "",
    Description: "",
    quantity: "",
    imageUrl: "",
  });

  const handleImageUrl = (imageUrl: string) => {
    setAddProducts((prev) => ({
      ...prev,
      imageUrl,
    }));
  };

  const handleChange = (props: any) => (e: any) => {
    setAddProducts({
      ...addProducts,
      [props]: e.target.value,
    });
  };

  const AddPrducts = async (e: any) => {
    e.preventDefault();
    setLoading(true);
  //  if (email == null || email == "") {
  //     toast.error("Please Enter Email");
  //     setLoading(false);
  //   } else if (password == null || password == "") {
  //     toast.error("Please Enter Password");
  //     setLoading(false);
  //   }

    try {
      const docRef = await addDoc(collection(db, "Inventory-Management"), {
        ...addProducts,
      });
      console.log(docRef);
    } catch (error) {
      console.log(error);
    }

    setAddProducts((prev) => ({
      ...prev,
      ProductId: "",
      name: "",
      Price: "",
      Description: "",
      quantity: "",
      imageUrl: "",
    }));
  };
  return (
    <>
      <div className="w-2/3 h-auto mt-20 ml-96 ">
          <div className="w-5/6 ml-40  flex ">
            
          <form>
            <div className="">
              <div
                className=" w-1/2 mr-1 text-sm font-bold text-white
                               tracking-wide mt-6"
              >
                Product Id
              </div>
              <Input
                type={"Number"}
                placeholder={"Product Id"}
                value={addProducts.ProductId}
                onChange={handleChange("ProductId")}
              />
            </div>

            <div className="">
              <div 
                className=" w-1/2 ml-1 text-sm font-bold text-white
                              tracking-wide mt-6"
              >
                Product Name
              </div>
              <Input
                type={"text"}
                placeholder={"Product Name"}
                value={addProducts.name}
                onChange={handleChange("name")}
              />
            </div>

            <div>
              <div className="text-sm font-bold text-white tracking-wide mt-6">
                Price
              </div>
              <Input
                type={"Number"}
                placeholder={"Price"}
                value={addProducts.Price}
                onChange={handleChange("Price")}
              />
            </div>

            <div>
              <div className="text-sm font-bold text-white tracking-wide mt-6">
                Quantity
              </div>
              <Input
                type={"Number"}
                placeholder={"Quantity"}
                value={addProducts.quantity}
                onChange={handleChange("quantity")}
              />
            </div>

            <div>
              <div className="text-sm font-bold text-white tracking-wide mt-6">
                Descripton
              </div>
              <TextArea
                type={"text"}
                placeholder={"Description"}
                value={addProducts.Description}
                onChange={handleChange("Description")}
              />
            </div>
            <AddImage handleImageUrl={handleImageUrl} />
            {/* <Etc/> */}

            <div className="mt-10">
              {!loading ? (
                <Button
                  // disable={
                  //   !email||
                  //   !password
                  // }
                   style="bg-red-800"
                  title={"Add Product"}
                  onClick={AddPrducts}
                />
              ) : (
                <Loading />
              )}
            </div>
          </form>
          {/* <div className="w-96 h-72 ml-28 mt-10 bg-red-800"></div> */}
        </div>
      
        </div>
    </>
  );
};

export default AddProduct;
