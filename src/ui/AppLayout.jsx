import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      header
      <Outlet />
      footer
    </div>
  );
}

export default AppLayout;
