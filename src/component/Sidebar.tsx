import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";
import Button from "./Button";
import { signOut } from "firebase/auth";
// import Logout from "../screen/Logout";
//import "../style/style.css"

function Sidebar() {
  const { email, setEmail } = useContext(UserContext);
  const { token, setToken } = useContext(UserContext);

  let navigate = useNavigate();
  const logout = () => {
    localStorage.getItem("token");
    window.localStorage.removeItem("token");
    window.localStorage.clear();
    setToken(null);
    navigate("/");
  };

  return (
    <div className="flex  fixed">
      <div
        className="absolute  bg-slate-900 
                 text-white w-[82rem] h-12 ml-72  "
      >
        <span className="flex justify-center mr-36 text-white text-3xl ">
          Inventory Management System
        </span>
      </div>

      <div className="flex w-72">
        <div
          className="flex bg-slate-900 flex-col w-72 h-screen
                       px-4 py-8 overflow-y-auto "
        >
          <img className=" ml-24 w-12 h-12 " src="logo2.png"></img>
          <span className="mx-5 mt-3 font-medium text-white">
            UserEmail: syed@gmail.com
          </span>
          <hr className="w-52 mx-5" />

          <div className="flex flex-col  ml-7 mt-4">
            <aside>
              <ul>
                <li className="">
                  <Link
                    className=" hover:bg-white active:bg-slate-100 focus:outline-none 
                               focus:bg-white focus:text-black flex items- w-64 
                                -ml-3 py-3 mt-6 text-white bg-slate-700 
                               hover:text-black rounded-l-lg  "
                    to="/AdminDashboard"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2
                          2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 
                          1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg> */}

                    <span className="mx-4 font-medium">Dashboard</span>
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:bg-white active:bg-white focus:outline-none 
                               focus:bg-white focus:text-black flex items- w-64 
                                -ml-3 py-3 mt-6 text-white bg-slate-700 
                               hover:text-black rounded-l-lg "
                    to="/Products"
                  >
                    <span className="mx-4 font-medium">Products</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:bg-white active:bg-white focus:outline-none 
                               focus:bg-white focus:text-black flex items- w-64 
                                -ml-3 py-3 mt-6 text-white bg-slate-700 
                               hover:text-black rounded-l-lg  "
                    to="/MainStock"
                  >
                    <span className="mx-4 font-medium">Stock</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:bg-white active:bg-white focus:outline-none 
                              focus:bg-white focus:text-black flex items- w-64 
                              -ml-3 py-3 mt-6 text-white bg-slate-700 
                             hover:text-black rounded-l-lg "
                    to="/MainSales"
                  >
                    <span className="mx-4 font-medium">Sales</span>
                  </Link>
                </li>

                {/* <li>
                  <Link
                    className="hover:bg-white active:bg-white focus:outline-none 
                               focus:bg-white focus:text-black flex items- w-64 
                                -ml-3 py-3 mt-6 text-white bg-slate-700 
                              hover:text-black rounded-l-lg  "
                    to="#"
                  >
                    <span className="mx-4 font-medium">Graph</span>
                  </Link>
                </li> */}

                {/* <li>
                  <Link
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 
                              rounded-md hover:bg-gray-200"
                    to="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 
                          1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 
                          1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37
                           2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 
                           0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 
                           00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31
                           2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="mx-4 font-medium">Settings</span>
                  </Link>
                </li> */}
                <li>
                  <Button
                    style="hover:bg-white active:bg-white focus:outline-none 
                               focus:bg-white focus:text-black flex items- w-64 
                                -ml-3 py-3  mt-36 text-white bg-slate-700 
                               hover:text-black rounded-l-lg "
                    title="Logout"
                    onClick={logout}
                  ></Button>
                </li>
                {/* <li>
                  <Link
                    className="flex items- w-64 -ml-3  py-3 mt-32 rounded-l-lg
                             text-white bg-slate-700 hover:bg-gray-200 
                              hover:text-black"
                    to=""
                  >
                    <span className="mx-9 font-medium">Logout</span>
                  </Link>
                </li> */}
                {/* 
                <li className='mt-60 ml-8'>
                <Logout/>
              </li> */}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
