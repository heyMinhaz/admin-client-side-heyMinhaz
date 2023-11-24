/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import {
  Link,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../FireBase/Firebase.config";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Registration = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const { createUser, handleUpdateProfile } = useContext(AuthContext);

  const location = useLocation();
  const from = location?.state || "/";
  const navigate = useNavigate();
  console.log("location i n the login page", location);

  const handelRegister = (e) => {
    e.preventDefault();

    console.log(e.currentTarget);

    const form = new FormData(e.currentTarget);

    const email = form.get("email");

    const password = form.get("password");

    const name = form.get("name");

    const photoURL = form.get("photoURL");
    navigate(from, { replace: true });

    console.log(email, password, name, photoURL);

    createUser(email, password)
      .then((userCredential) => {
        handleUpdateProfile(name, photoURL).then(() => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Registation failed,please try again!");
        console.log(errorMessage);
        console.log(errorCode);
      });
  };

  const handelPopUpRe = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
          title: "Registration successful",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        {
          const user = error.user;
          console.log(user);
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
            icon: "error",
            title: "Registration failed",
          });
        }
      });
  };

  return (
    <div>
      <body>
        <div className="flex  items-center justify-center lg:p-20 p-5 ">
          <div className="min-h-1/2 bg-gray-900  border border-gray-900 rounded-2xl">
            <div className="flex flex-row mx-auto">
              <button
                type="button"
                className="  text-white  border-gray-100 py-2 hover:text-white px-3"
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
                    <p className="ml-2">Back</p>
                  </div>{" "}
                </NavLink>
              </button>
            </div>
            <form onSubmit={handelRegister}>
              <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
                <img
                  className=" h-40"
                  src="https://i.ibb.co/qYH9sBN/Np-JBy19-Y-2x.png"
                  alt=""
                />
                <h1 className="text-white text-2xl">
                  Register For your Future
                </h1>{" "}
                <div onClick={handelPopUpRe}>
                  <a
                    className=" border-white border px-10 py-3  flex items-center justify-center w-full rounded-full   mb-6 text-sm font-medium btn btn-outline btn-info
                  
                  "
                  >
                    <img
                      className="h-5 mr-2"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                      alt=""
                    />

                    <p className=" "> Login in with Google</p>
                  </a>
                </div>
                <input
                  className="w-full p-2 bg-gray-900 rounded-md  border border-gray-700 focus:border-blue-700"
                  placeholder="Name"
                  type="text"
                  name="name"
                  id=""
                />
                <input
                  className="w-full p-2 bg-gray-900 rounded-md border border-gray-700 "
                  placeholder="Email*"
                  type="email"
                  name="email"
                  id=""
                />
                <input
                  className="w-full p-2 bg-gray-900 rounded-md border border-gray-700 "
                  placeholder="Photo Url*"
                  type="text"
                  name="photoURL"
                  id=""
                />
                <input
                  className="w-full p-2 bg-gray-900 rounded-md border border-gray-700 "
                  placeholder="password*"
                  type="password"
                  name="password"
                  id=""
                />
                <input
                  className="w-full p-2 btn btn-outline btn-info rounded-full font-bold text-gray-900 border border-gray-700 "
                  type="submit"
                  name="submit"
                  id=""
                />
                <p>
                  You Have Account?
                  <Link to="/login">
                    {" "}
                    <a className="font-semibold text-sky-700" href="">
                      Login
                    </a>
                  </Link>
                </p>
              </div>
            </form>{" "}
          </div>
        </div>
      </body>
    </div>
  );
};

export default Registration;
