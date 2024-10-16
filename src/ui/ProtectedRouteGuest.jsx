import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

function ProtectedRouteGuest() {
  const { user } = useUser();
  const decodedUser = user ? jwtDecode(user) : null;

  const expiresIn = decodedUser ? new Date(decodedUser.exp * 1000) : null;

  if (user && expiresIn > new Date()) {
    toast.error("You are already logged in");

    return <Navigate to={'/'} />;
  }

  return <Outlet />;
}

export default ProtectedRouteGuest;
