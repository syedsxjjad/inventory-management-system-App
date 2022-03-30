import { async } from "@firebase/util";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import AddImage from "../../component/AddImage";
import Button from "../../component/Button";
import Input from "../../component/Input";
import Loading from "../../component/Loading";
import TextArea from "../../component/TextArea";
import { UserContext } from "../../context/Context";
import { db } from "../../Firebase/Firebase";
import {} from "firebase/firestore"
import { useNavigate } from "react-router-dom";

interface ViewProductProps {
  id?: string;
}
const ModalProduct = ({ id }: ViewProductProps) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { productView, setProductView } = useContext(UserContext);

  const [addProducts, setAddProducts] = useState({
    ProductId: "",
    name: "",
    Price: "",
    Description: "",
    quantity: "",
    imageUrl: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    setAddProducts(productView?.find((val: any) => val.id === id));
  }, [id]);

  const UpdatePrducts = async (e: any) => {
    setLoading(true)
  try{

    const washingtonRef = doc(db, "Inventory-Management", `${id}`);
    setLoading(false)
    await updateDoc(washingtonRef, {
      ProductId: addProducts.ProductId,
      name: addProducts.name,
      Price: addProducts.Price,
      Description: addProducts.Description,
      quantity: addProducts.quantity,
    });
  
    toast.success("Update Successfully");
    // navigate("/ViewProduct")
  }
  catch(error){
   console.log(error);
   setLoading(false);
   toast.error("Some Thing Wrong");
  }
  };

  // const handleImageUrl = (imageUrl: string) => {
  //   setAddProducts((prev) => ({
  //     ...prev,
  //     imageUrl,
  //   }));
  // };

  const handleChange = (props: any) => (e: any) => {
    setAddProducts({
      ...addProducts,
      [props]: e.target.value,
    });
  };

  return (
    <>
      <button
        className="bg-slate-600 text-black active:bg-blue-500 hover:bg-slate-700
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <form className="bg-slate-200  shadow-md rounded mr-24  pt-6 pb-8 w-full">
                    <div className="w-auto px-56">
                      <div className="">
                        <div
                          className="text-sm font-bold mr-52 text-black
                               tracking-wide mt-6"
                        >
                          ProductId
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
                          className="  mr-52 text-sm font-bold text-black
                              tracking-wide mt-6"
                        >
                          ProductName
                        </div>
                        <Input
                          type={"text"}
                          placeholder={"Product Name"}
                          value={addProducts.name}
                          onChange={handleChange("name")}
                        />
                      </div>

                      <div>
                        <div className="text-sm font-bold  mr-52 text-black tracking-wide mt-6">
                          ProductPrice
                        </div>
                        <Input
                          type={"Number"}
                          placeholder={"Price"}
                          value={addProducts.Price}
                          onChange={handleChange("Price")}
                        />
                      </div>

                      <div>
                        <div className="text-sm font-bold mr-52 text-black tracking-wide mt-6">
                          ProductQuantity
                        </div>
                        <Input
                          type={"Number"}
                          placeholder={"Quantity"}
                          value={addProducts.quantity}
                          onChange={handleChange("quantity")}
                        />
                      </div>

                      <div>
                        <div className="text-sm font-bold mr-52 text-black tracking-wide mt-6">
                          ProductDescription
                        </div>
                        <TextArea
                          type={"text"}
                          placeholder={"Description"}
                          value={addProducts.Description}
                          onChange={handleChange("Description")}
                        />
                      </div>
                      {/* <AddImage handleImageUrl={handleImageUrl} /> */}

                      <div className="mt-10">
                        {!loading ? (
                          <Button
                            style="bg-red-800 "
                            title={"Update"}
                            onClick={UpdatePrducts}
                          />
                        ) : (
                          <Loading/>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ModalProduct;
