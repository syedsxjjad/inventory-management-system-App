import React from "react";

const AdminPanel = () => {
  return (
    <>
      <div
        className="flex gird grid-col-1 justify-center lg:grid-cols-3 
                       lg:gap-3 mt-24  ml-80"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20">
          <div className="w-96 h-40 rounded-md  bg-slate-900 shadow-xl
                          max-w-xs hover:scale-110 transition duration-300 ease-in-out">
            <span className=" text-white">Produc1</span>
          </div>

        
      
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
