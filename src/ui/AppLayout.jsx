import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="container mx-auto bg-[#ffffff]">
      <Header />
      <main>
        <Outlet />
      </main>
      footer
    </div>
  );
}

export default AppLayout;
