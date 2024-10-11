import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { name: "Home", url: "/" },
  { name: "All Doctors", url: "/doctors" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

function Header() {
  return (
    <header className="p-6 border-b mb-5 border-[#ADADAD]">
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
          <Link
            className="px-4 py-2 bg-[#5F6FFF] rounded-full text-[#fff]"
            to="/signup"
          >
            Create account
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
