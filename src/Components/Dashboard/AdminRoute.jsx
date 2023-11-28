/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return 
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;