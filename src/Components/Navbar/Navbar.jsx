/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";






const Navbar = () => {



const { user, logOut } = useContext(AuthContext);

const handelSingout = () => {
  logOut().then().catch();
};



    return (
      <div className="flex h-28 pb-8">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/">
                  {" "}
                  <li>
                    <a>Home</a>
                  </li>
                </Link>
                <Link to="/artical">
                  {" "}
                  <li>
                    <a>Add Articles</a>
                  </li>
                </Link>
                <Link to="/artical">
                  {" "}
                  <li>
                    <a>All Articles</a>
                  </li>
                </Link>
                <li>
                  <a>Subscription</a>
                </li>
                {user ? (
                  <Link to="/dashboard">
                    {" "}
                    <li>
                      <a>Dashboard</a>
                    </li>
                  </Link>
                ) : (
                  <div></div>
                )}
                <Link to="/myartical">
                  <li>
                    <a>My Articles</a>
                  </li>
                </Link>
              <Link to="/premiumartical">   <li>
                  <a>Premium Articles </a>
                </li></Link>  
              </ul>
            </div>
            <Link
              to="/"
              className="text-lg font-semibold tracking-widest  uppercase rounded-lg   "
            >
              <Logo></Logo>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">
                  {" "}
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/artical">
                  {" "}
                  <a>Add Articles</a>
                </Link>
              </li>
              <li>
                <Link to="allartical">
                  {" "}
                  <a>All Articles</a>
                </Link>
              </li>
              <Link to="/subcription">
                {" "}
                <li>
                  <a>Subscription</a>
                </li>
              </Link>
              {user ? (
                <li>
                  <Link to="/dashboard">
                    {" "}
                    <a>Dashboard</a>
                  </Link>
                </li>
              ) : (
                <div></div>
              )}
              {user ? (
                <Link to="/myartical">
                  {" "}
                  <li>
                    <a>My Articles</a>
                  </li>
                </Link>
              ) : (
                <div></div>
              )}{" "}
              {user ? (
                <Link to="/premiumartical">
                  {" "}
                  <li>
                    <a>Premium Articles </a>
                  </li>
                </Link>
              ) : (
                <div></div>
              )}{" "}
            </ul>
          </div>
          <label
            tabIndex={0}
            className=" flex items-center -mr-5 ml-2  btn-circle avatar"
          ></label>
          <div className="navbar-end">
            <div>
              {user ? (
                <div>
                  <img
                    className="mr-5 rounded-full h-10 w-10"
                    src={user?.photoURL}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>

            {user ? (
              <button
                onClick={handelSingout}
                className=" relative inline-flex items-center justify-center p-0.5 mb- mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-7 py-2   transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Log Out
                </span>
              </button>
            ) : (
              <div>
                <Link to="/login">
                  {" "}
                  <button className=" relative inline-flex items-center justify-center p-0.5 mb- mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-7 py-2   transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Login
                    </span>
                  </button>
                </Link>
                <span className=" px-2 ">Or</span>
                <Link to="/register">
                  {" "}
                  <a className="btn  btn-sm">Registration</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;