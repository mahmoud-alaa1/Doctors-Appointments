import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/userContext";

function ProtectedRoute() {
  const { user } = useUser();
  return user ? <Navigate to="/" replace={true} /> : <Outlet />;
}

export default ProtectedRoute;
