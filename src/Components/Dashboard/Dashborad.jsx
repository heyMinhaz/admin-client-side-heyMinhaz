/* eslint-disable no-unused-vars */
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import useAdmin from "../Hook/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";




const Dashboard = () => {
   const{user}=useContext(AuthContext)

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div >
      
            <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen  bg-stone-200">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                                       <div className=" font-sans mb-6 pt-20 w-[200px] flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto ">
     <img className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white" src={user.photoURL} alt=""/>
     <div className=" mt-2 ml-4 text-xl font-medium">{user.displayName}(Admin)</div>

    
     
  </div>
</div>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                            <div>
                        <div className=" font-sans pt-20 w-[200px] flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto ">
     <img className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white" src={user.photoURL} alt=""/>
     <div className=" mt-2 ml-4 text-xl font-medium">{user.displayName}(User)</div>

    
     
  </div>
</div>
                        </div>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                 
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaAd></FaAd>Add Publisher</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                     
                                        User </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li> */}
                                {/* <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li> */}
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            All Publisher</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;