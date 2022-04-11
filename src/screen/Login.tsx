import React, { useContext, useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import { auth } from "../Firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";
import Loading from "../component/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../context/Context";

const Login = () => {
  const { email, setEmail } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useContext(UserContext);
  let navigate = useNavigate();

  const login = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (email == null || email == "") {
      toast.error("Please Enter Email");
      setLoading(false);
    } else if (password == null || password == "") {
      toast.error("Please Enter Password");
      setLoading(false);
    } else {
      try {
        const response: any = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        // console.log(response.user.accessToken);
        setLoading(false);
        setToken(
          localStorage.setItem(
            "token",
            JSON.stringify(response.user.accessToken)
          )
        );

        toast.success("Login Successfully");
        navigate("/AdminDashboard");
      } catch (error) {
        setLoading(false);
        toast.error("Email And Password InCorrect");
      }
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div
        className="w-full justify-center 
                      flex h-screen bg-slate-300 "
      >
        <div
          className=" bg-white lg:mt-40 xl:max-h-96 rounded-md
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
                  style="w-80"
                  type={"text"}
                  placeholder={"Enter Email"}
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
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
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mt-10">
                {!loading ? (
                  <Button title={"Login"} onClick={login} style="" />
                ) : (
                  <Loading />
                )}
              </div>
            </form>

            <div
              className="mt-12 ml-3 text-sm 
            font-display font-semibold text-gray-700 text-center"
            >
              Don't have an account ?{" "}
              <Link
                to="/Signup"
                className="cursor-pointer 
            text-indigo-600 hover:text-indigo-800"
              >
                Sign up
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
};

export default Login;
