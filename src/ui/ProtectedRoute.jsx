import { Navigate, Outlet, useActionData } from "react-router-dom";
import { useUser } from "../context/userContext";
import { isExpired } from "react-jwt";

function ProtectedRoute() {
  const user = useUser();
  console.log(user);
  return user.user && !isExpired ? <Navigate to="/login" /> : <Outlet />;
}

export default ProtectedRoute;
