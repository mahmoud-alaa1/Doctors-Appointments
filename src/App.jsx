import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import Profile from "./pages/profile";
import Appointments from "./pages/Appointments";
import ProtectedRouteUser from "./ui/ProtectedRouteUser";
import ProtectedRouteGuest from "./ui/ProtectedRouteGuest";

function App() {
  return (
    <UserContextProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<ProtectedRouteUser />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/appointments" element={<Appointments />} />
            </Route>
            <Route element={<ProtectedRouteGuest />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
