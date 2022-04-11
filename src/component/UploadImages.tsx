import { render } from "@headlessui/react/dist/utils/render";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../component/Button";
import Loading from "../component/Loading";

interface AddImageProps {
  handleImageUrl: (url: string) => void;
}

function UploadImages({ handleImageUrl }: AddImageProps) {
  const [file, setFile] = useState<any>([]);
  const [isUpload, setIsUpload] = useState(false);
  const [loading, setLoading] = useState(false);

  const delet = () => {
    setFile("");
    setIsUpload(false);
  };

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        setFile((prevState: any) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
    });
    console.log("cceptedFiles", acceptedFiles);
    console.log("rejectedFiles", rejectedFiles);
  }, []);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // ,accept:'image/JPG'
  });

  const uploadImage = async (e: any) => {
    e.preventDefault();
    //  console.log(file);
    setLoading(true);

    const files = e.target.files;
    const data = new FormData();
    if (file) {
      data.append("file", file);
      data.append("upload_preset", "InventoryManagement");
      setLoading(true);

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfefpurpu/image/upload",

        {
          method: "POST",
          body: data,
        }
      );
      const responseJson = await res.json();
      console.log(responseJson);

      handleImageUrl(responseJson.url);
      setLoading(false);
      e.target.file = null;
      setIsUpload(true);
    }
  };

  return (
    <>
      <div className="w-60 h-36 mt-3 bg-slate-300">
        <div className="" {...getRootProps()}>
          <input {...getInputProps()} />

          {isDragActive ? (
            "Drag Active"
          ) : (
            <div className="w-60 h-36 mt-3 py-12 px-14 font-bold ">
              {/* <img className="w-9 h-11 " src="src\Asset\crimee.jpg"></img> */}
              Image Upload
            </div>
          )}
        </div>
        {file.length > 0 && (
          <div className="relative">
            <img className="w-60 h-36 -mt-36" src={file[0]}></img>

            <button
              type="button"
              onClick={delet}
              className="absolute w-4 h-6 ml-56 hover:bg-white hover:text-red-600 font-bold -mt-36 bg-black text-white"
            >
              X
            </button>
          </div>
        )}
      </div>

      {file.length > 0 && !loading && !isUpload ? (
        <Button
          style="w-auto h-10 py-1 mt-3 hover:bg-black"
          title="Upload Image"
          onClick={uploadImage}
        />
      ) : null}
      {loading ? <Loading /> : null}
    </>
  );
}

export default UploadImages;
