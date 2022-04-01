import React, { useContext, useState } from "react";
import { UserContext } from "../../context/Context";

const Store = () => {
  const status = [
    { id: 1, name: "Imtiaz" },
    { id: 2, name: "Naheed" },
    { id: 3, name: "Chase" },
  ];

  const {storeName, setStoreName} = useContext(UserContext);

  // console.log(storeName,"storename");
  

  return (
    <div className="w-72 h-32 " >
      <div>
        <select
          className="w-56 h-12 bg-slate-800 text-white rounded-lg"
          onChange={((e:any)=>{
            setStoreName(e.target.value)
          })}
         >
          {status.map((data: any, index: any) => (
            <option key={index}>{data.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Store;
