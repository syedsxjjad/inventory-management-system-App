import { type } from "@testing-library/user-event/dist/type";
import React from "react";

interface InputProps {
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: any;
}

const Input = ({ type, value, placeholder, onChange }: InputProps) => {
  //console.log(type,value,placeholder);

  return (
    <>
      <input
        className='"w-full text-lg bg-transparent border-b-slate-400
                    py-2 border-b border-gray-300 w-80 focus:outline-none
                  focus:border-slate-900 "'
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
