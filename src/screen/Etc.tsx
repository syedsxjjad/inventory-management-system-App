import { render } from "@headlessui/react/dist/utils/render";
import React, { useCallback, useEffect, useState } from "react";
import{useDropzone}from 'react-dropzone'

const Etc = () => {

    const [image, setImage]=useState <any> ([])
 
  const onDrop= useCallback((acceptedFiles,rejectedFiles)=>{
     acceptedFiles.forEach((file: any) => {
         const reader=new FileReader()
         reader.onload=()=>{

            setImage((prevState: any) =>[...prevState,reader.result])
         }
         reader.readAsDataURL(file)
     })
    console.log('cceptedFiles',acceptedFiles);
    console.log('rejectedFiles',rejectedFiles);
  } ,[])

useEffect(()=>{
console.log(image);

},[image])

const {getRootProps,getInputProps,isDragActive}=useDropzone({onDrop
// ,accept:'image/JPG'
})
  return (
    <>
    <div className="w-60 h-36 bg-slate-100 border-dotted border-2">
     <div className=""{...getRootProps()}>
       <input  {...getInputProps()}/>
      {
        isDragActive ? "Drag Active" :"you can file here"
      }
   {image.length >0 &&<div >
       {image.map((imag:any,ind:any)=> <img className="w-52 h-28 ml-4" src={image} key={ind}></img>)}
       </div>}
     </div>
    </div>
     
  </>
  )
}

export default Etc
