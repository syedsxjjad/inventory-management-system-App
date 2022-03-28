import React from "react";
interface LoadingProps {
  style?: string;
}

const Loading = ({ style = "" }: LoadingProps) => {
  return (
    <>
      <div
        className={`flex justify-start spinner-border animate-spin 
                    w-8 h-8 border-4 rounded-full border-b-slate-700${style}`}
      >
        <span className="visually-hidden"></span>
      </div>
    </>
  );
};

export default Loading;
