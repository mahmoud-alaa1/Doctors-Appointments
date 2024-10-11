import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col  mx-auto sm:w-[90%]  lg:w-[80%] bg-[#ffffff] min-h-screen">
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
