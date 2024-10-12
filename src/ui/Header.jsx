import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import LinkUi from "../ui/Link";
import { useUser } from "../context/userContext";
import { useJwt } from "react-jwt";

const links = [
  { name: "Home", url: "/" },
  { name: "All Doctors", url: "/doctors" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

function Header() {
  const { user } = useUser();
  const { decodedToken, isExpired } = useJwt(user);

  return (
    <header className="text-nowrap p-6 border-b  border-[#ADADAD]">
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
        <div className="flex gap-5 items-center font-outfit font-medium">
          <Link to="/login">Login</Link>
          <LinkUi className="px-4 py-2 bg-primary text-[#fff]" to="/signup">
            Create account
          </LinkUi>
        </div>
      </nav>
    </header>
  );
}

export default Header;
