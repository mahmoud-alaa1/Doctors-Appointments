import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/userContext";

function ProtectedRouteGuest() {
  const { user } = useUser();

  return !user ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRouteGuest;
