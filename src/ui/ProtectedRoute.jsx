import { Outlet, useActionData } from "react-router-dom";
import { getAuthToken } from "../lib";
import useUser from "../hooks/useUser";

function ProtectedRoute({ children }) {
  const isAuthenticated = getAuthToken();
  useUser();
  return <Outlet />;
}

export default ProtectedRoute;
