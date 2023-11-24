/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import {
  Link,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../FireBase/Firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const { singIn } = useContext(AuthContext);

  const location = useLocation();

  const from = "/";

  const navigate = useNavigate();
  console.log("location i n the login page", location);

  const handelLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });
        e.target.reset();

        navigate(from, { replace: true });
      })

      .catch((error) => {});
  };
  const handelPopUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  return (
    <div>
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/motion-tailwind.css"
          />
        </head>
        <body className="bg-white rounded-lg py-5">
          <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
            <div className="flex flex-row mx-auto">
              <button
                type="button"
                className="  text-black  border-gray-500 py-2  px-3 shadow-lg rounded-lg"
              >
                <NavLink to="/">
                  {" "}
                  <div className="flex flex-row align-middle mr-5">
                    <svg
                      className="w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>{" "}
                    <p className="ml-2 text-black">Back</p>
                  </div>{" "}
                </NavLink>
              </button>
            </div>

            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
              <div className="flex items-center justify-center w-full lg:p-12">
                <div className="flex items-center xl:p-10">
                  <form
                    onSubmit={handelLogin}
                    className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                  >
                    <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                      Login In
                    </h3>
                    <p className="mb-4 text-grey-700">
                      Enter your email and password
                    </p>
                    <a
                      onClick={handelPopUp}
                      className=" cursor-pointer flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300"
                    >
                      <img
                        className="h-5 mr-2"
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                        alt=""
                      />
                      <p onClick={handelPopUp} className=" font-poppins">
                        {" "}
                        Login in with Google
                      </p>
                    </a>
                    <div className="flex items-center mb-3">
                      <hr className="h-0 border-b border-solid border-grey-500 grow" />
                      <p className="  font-poppins mx-4 text-grey-600">or</p>
                      <hr className="h-0 border-b border-solid border-grey-500 grow" />
                    </div>
                    <label
                      htmlFor="email"
                      className="mb-2  font-poppins text-sm text-start text-grey-900"
                    >
                      Email*
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="mail@loopple.com"
                      className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                    />
                    <label
                      htmlFor="password"
                      className="mb-2 text-sm text-start text-grey-900"
                    >
                      Password*
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter a password"
                      className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                    />
                    <div className="flex flex-row justify-between mb-8">
                      <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked
                          value=""
                          className="sr-only peer"
                        />
                        <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                          <img
                            className=""
                            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                            alt="tick"
                          />
                        </div>
                        <span className="ml-3 text-sm font-normal text-grey-900">
                          Keep me logged in
                        </span>
                      </label>
                    </div>
                    <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">
                      Login In
                    </button>
                    <p className="text-sm leading-relaxed text-grey-900">
                      Not registered yet?{" "}
                      <Link to="/register">
                        {" "}
                        <a
                          href="javascript:void(0)"
                          className="font-bold text-purple-blue-500"
                        >
                          Create an Account
                        </a>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};

export default Login;
