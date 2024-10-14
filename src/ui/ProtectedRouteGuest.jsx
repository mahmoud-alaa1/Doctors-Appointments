import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/userContext";
import toast from "react-hot-toast";

function ProtectedRouteGuest() {
  const { user } = useUser();

  if (user) {
    toast.error("You are already logged in");

    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRouteGuest;
