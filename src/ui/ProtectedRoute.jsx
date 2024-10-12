import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/userContext";
import { useJwt } from "react-jwt";

function ProtectedRoute() {
  const { user } = useUser();
  const { decodedToken, isExpired } = useJwt(user);
  console.log(decodedToken);
  return decodedToken && !isExpired ? (
    <Navigate to="/" replace={true} />
  ) : (
    <Outlet />
  );
}

export default ProtectedRoute;
