import React from "react";

interface TextAreaProps {
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: any;
}

const TextArea = ({ type, value, placeholder, onChange }: TextAreaProps) => {
  return (
    <>
      <textarea
        className=" text-lg bg-transparent border-b-slate-400
                    py-2 border-b border-gray-300 w-80 focus:outline-none
                    focus:border-slate-900 "
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;
