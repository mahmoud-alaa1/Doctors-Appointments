import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/userContext";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

function ProtectedRouteUser() {
  const { user } = useUser();
  const decodedUser = user ? jwtDecode(user) : null;

  const expiresIn = decodedUser ? new Date(decodedUser.exp * 1000) : null;

  if (!user) {
    toast.error("Session expired, please login again");

  } else if (expiresIn < new Date()) {
    toast.error("Session expired, please login again");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRouteUser;
