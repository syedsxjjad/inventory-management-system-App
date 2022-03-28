

import React, { useState } from "react";
import Button from "./Button";


interface AddImageProps {
  handleImageUrl: (url:string) =>void;
};

export default function AddImage({handleImageUrl}:AddImageProps) {
  const [file, setFile] = useState(null);
 const[loading,setLoading]=useState(false);
//  console.log({file});
 

//  const Imagehandler=(e:any)=>{
//   const img=e.target.file[0];
//   console.log(img);
  
//  }
   const uploadImage= async (e:any)=>{
     e.preventDefault()
     console.log(file);
     
   const files=e.target.files
   const data=new FormData()
   if (file) {
     
  data.append('file',file)
   data.append('upload_preset','InventoryManagement')
   setLoading(true)

   const res= await fetch("https://api.cloudinary.com/v1_1/dfefpurpu/image/upload",
  
   {
     method:'POST',
     body:data
     
   })
   const responseJson = await res.json()
   console.log(responseJson);
   
    handleImageUrl(responseJson.url)
   }
   }
    

   const Imagehandler=(e:any)=>{
    const pic=e.target.files[0];
    setFile(pic)
  }
  
   
  return (
    <>

{/* <div className="flex w-full  items-center mt-5 bg-grey-lighter">
    <label className="w-60 flex flex-col items-center px-4 py-4 bg-white text-blue rounded-lg shadow-lg 
              tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input type='file' className="hidden" onChange={Imagehandler} />
    </label>
</div> */}
      <div
        className=" block
        -40
         mt-
         px-3
         py-1.5
         text-base
         font-normal
         text-gray-700
         bg-white bg-clip-padding
         border border-solid border-gray-300
         rounded
         transition
         ease-in-out
         m-0"
           >
      <input
        className=""
        id="f02"
        type="file"
        placeholder="Add profile picture"
        multiple
        onChange={Imagehandler}
      />
      
        <Button
                    title={"Upload"}
                    onClick={uploadImage}
                  />

      {/* <div>
        <label className="selpic" htmlFor="f02">
          Select {image.length || "Image"}
        </label>
      </div> */}

    </div>
    </>
  );
}


