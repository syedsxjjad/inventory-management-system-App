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
import { useNavigate } from "react-router-dom";
import Etc from "../Etc";
import UploadImages from "../../component/UploadImages";
// import UploadImages from "../../component/UploadImages";
// import DropImage from "../../component/DropImage";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [addProducts, setAddProducts] = useState({
    name: "",
    Price: "",
    Description: "",
    quantity: "",
    imageUrl: "",
  });

  let navigate = useNavigate();

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

    if (addProducts.name === null || addProducts.name === "") {
      toast.error("Please Enter Name");
      setLoading(false);
    } else if (addProducts.Price === null || addProducts.Price === "") {
      toast.error("Please Enter Price");
      setLoading(false);
    } else if (
      addProducts.Description === null ||
      addProducts.Description === ""
    ) {
      toast.error("Please Enter Description");
      setLoading(false);
    } else if (addProducts.quantity === null || addProducts.quantity === "") {
      toast.error("Please Enter Quantity");
      setLoading(false);
    } else if (addProducts.imageUrl === null || addProducts.imageUrl === "") {
      toast.error("Please Enter Image");
      setLoading(false);
    } else {
      try {
        const docRef = await addDoc(collection(db, "Inventory-Management"), {
          ...addProducts,
        });
        setLoading(false);
        console.log(docRef);

        setAddProducts({
          name: "",
          Price: "",
          Description: "",
          quantity: "",
          imageUrl: "",
        });

        toast.success("Create Successfully");
        navigate("/Products");
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Some Thing Wrong");
      }
    }
  };

  return (
    <>
      <div className="w-2/3 h-auto mt-20 ml-96 ">
        <div className="w-5/6 ml-40  flex ">
          <form>
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

            <UploadImages handleImageUrl={handleImageUrl} />

            <div className="mt-10">
              {!loading ? (
                <Button
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

export default AddProduct;
