import { Outlet, useLocation } from "react-router-dom";
import { useUser } from "../context/userContext";

function ProtectedRoute() {
  const { user } = useUser();
  const location = useLocation();
  console.log(location.pathname);
  if (
    !user &&
    (location.pathname === "/login" || location.pathname === "/signup")
  ) {
    return <Outlet />;
  } else if (
    user &&
    (location.pathname === "/profile" || location.pathname === "/appointments")
  ) {
    return <Outlet />;
  }
}

export default ProtectedRoute;
