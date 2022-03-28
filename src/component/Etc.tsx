import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";




const etc = () => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles);

    console.log(rejectedFiles);
  }, []);

  // useEffect(() => {
  //   console.log(image);
  // }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/png",
  });

  return (
    <>
      <div className="w-60 h-36 bg-slate-100 border-dotted border-2">
        <div className="" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? "Drag Active" : "you can file here"}
        </div>
      </div>
    </>
  );
};

export default etc;
