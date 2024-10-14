import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../context/userContext";

function ProtectedRoute() {
  const { user } = useUser();
  const location = useLocation();

  // Allow access to login and signup if the user is not authenticated
  if (
    !user &&
    (location.pathname === "/login" || location.pathname === "/signup")
  ) {
    return <Outlet />;
  }

  // Redirect authenticated users away from login and signup
  if (
    user &&
    (location.pathname === "/login" || location.pathname === "/signup")
  ) {
    return <Navigate to="/profile" replace />;
  }

  // Allow access to protected routes for authenticated users
  if (
    user &&
    (location.pathname === "/profile" || location.pathname === "/appointments")
  ) {
    return <Outlet />;
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Default case (can be handled if necessary)
  return <Outlet />;
}

export default ProtectedRoute;
