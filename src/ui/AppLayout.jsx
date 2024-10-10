import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="container">
      header
      <Outlet />
      footer
    </div>
  );
}

export default AppLayout;
