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
import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
