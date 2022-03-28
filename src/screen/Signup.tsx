import React, { useEffect, useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";

import { auth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../component/Loading";

function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const Signin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (registerEmail == null || registerEmail =="" ) {
      toast.error("Please Enter Email");
      setLoading(false)
    }
    else if (registerPassword == null || registerPassword == "") {
      toast.error("Please Enter Password");
      setLoading(false)
    }
    else{

      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
          );
          // localStorage.setItem("token",registerEmail)
          toast.success("Create Successfully");
        } catch (error) {
          toast.error("Please Try Again");
        }
        setLoading(false);
        setRegisterEmail("");
        setRegisterPassword("");
      };
    
    }
  return (
    <>
    <div
      className="w-full justify-center 
                    flex h-screen bg-slate-300 "
    >
      <div
        className=" bg-white lg:mt-40 xl:max-h-96
                         xl:px-24 xl:max-w-xl shadow-xl "
      >
        <img className=" mt-3 w-14 h-14 ml-28" src="logo2.png"></img>
                  <div className="mt-8">
          <form>
            <div>
              <div
                className="text-sm font-bold 
                              text-gray-700 tracking-wide"
              >
                Email Address
              </div>
              <Input
                type={"text"}
                placeholder={"Enter Email"}
                value={registerEmail}
                onChange={(e: any) => {
                  setRegisterEmail(e.target.value);
                }}
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div
                  className="text-sm font-bold 
                                text-gray-700 tracking-wide"
                >
                  Password
                </div>
               

              </div>
              <Input
                type={"password"}
                placeholder={"Enter Password"}
                value={registerPassword}
                onChange={(e: any) => {
                  setRegisterPassword(e.target.value);
                }}
              />
            </div>
            <div className="mt-10">
              {!loading ? (
                <Button
                  title={"Sign Up"}
                  onClick={Signin}
                />
              ) : (
                <Loading />
              )}
            </div>
          </form>

          <div className="mt-12 ml-3 text-sm 
          font-display font-semibold text-gray-700 text-center">
           Have an account ?{" "}
          <Link to='/' className="cursor-pointer 
          text-indigo-600 hover:text-indigo-800">
            Login
          </Link>
        </div>
        </div>
      </div>
    </div>
    
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

  </>
);
}

export default Signup;
