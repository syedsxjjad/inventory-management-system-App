import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

interface ButtonProps {
  title?: string;
  onClick?: any;
  style?:string;
  disabled?:boolean;
  
}

const Button = ({ title, onClick,style=" ",disabled }: ButtonProps) => {
  return (
    <>
      <button
      type="button"
        className={`bg-slate-700 text-white p-4 w-36 
                    rounded-md tracking-wide font-semibold
                    font-display focus:outline-none shadow-lg 
                    focus:shadow-outline hover:bg-red-900 ${style}`}
            
        disabled={disabled}
        onClick={onClick}
       
    
     
      >{title}</button>
    </>
  );
};

export default Button;
