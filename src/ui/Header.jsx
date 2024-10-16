import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import LinkUi from "../ui/Link";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import useUserData from "../hooks/useUserData";
import DownArrowHead from "../icons/DownArrowHead";
const links = [
  { name: "Home", url: "/" },
  { name: "All Doctors", url: "/doctors" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

const NavSignIn = () => (
  <div className="flex gap-5 items-center font-outfit font-medium">
    <Link to="/login">Login</Link>
    <LinkUi className="px-4 py-2 bg-primary text-[#fff]" to="/signup">
      Create account
    </LinkUi>
  </div>
);

const profileLinks = [
  { name: "Logout", url: "/" },
  { name: "My Appointsments", url: "/appointments" },
  { name: "Profile", url: "/profile" },
];

const NavProfile = () => {
  const { profileData } = useUserData();

  const { setUser } = useUser();
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("supabaseToken");
    toast.success("Logged out successfully");
  };

  return (
    <div className="dropdown relative flex items-center gap-2 ">
      <img
        loading="lazy"
        src={profileData.image || "/default-avatar.png"}
        className="w-9 rounded-full aspect-square"
        alt="default user avatar"
      />
      <DownArrowHead />
      <ul className="flex flex-col gap-8">
        <li>
          <Link onClick={handleLogout} to={profileLinks[0].url}>
            {profileLinks[0].name}
          </Link>
        </li>
        <li>
          <Link to={profileLinks[1].url}>{profileLinks[1].name}</Link>
        </li>
        <li>
          <Link to={profileLinks[2].url}>{profileLinks[2].name}</Link>
        </li>
      </ul>
    </div>
  );
};

function Header() {
  const { user } = useUser();
  const decodedUser = user ? jwtDecode(user) : null;
  const expiresIn = decodedUser ? new Date(decodedUser.exp * 1000) : null;
  console.log(decodedUser);
  return (
    <header className="text-nowrap p-6 border-b border-[#ADADAD]">
      <nav className="flex flex-col lg:flex-row gap-6 justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex flex-wrap justify-center text-md gap-8 font-outfit text-[#1F2937] font-semibold uppercase items-center tracking-wider">
          {links.map((link) => (
            <li key={link.url}>
              <NavLink className="relative" to={link.url}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {!user || expiresIn < new Date() ? <NavSignIn /> : <NavProfile />}
      </nav>
    </header>
  );
}

export default Header;
