import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="flex  p-4 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  text-sm mt-auto">
      <div className="text-gray-600">
        <Logo className="mb-5" />
        <p className="w-full md:w-2/3   leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          vitae consequatur sunt adipisci ab illum eaque reprehenderit impedit.
          Ipsam velit a optio sed dolore quos aliquid praesentium temporibus eum
          distinctio.
        </p>
      </div>
      <div>
        <h2 className="uppercase font-semibold text-2xl mb-5">Company</h2>
        <ul className="flex flex-col gap-3 ">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About us</Link>
          </li>
          <li>
            <Link>Delivery</Link>
          </li>
          <li>
            <Link>Privacy policy</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="uppercase font-semibold text-2xl mb-5">Get in Touch</h2>
        <ul className="flex flex-col gap-3 ">
          <li>+20102812365</li>
          <li>
            <a className="underline" href="mailto:shfaa@health.com">
              shfaa@health.com
            </a>
          </li>
          <li>
            <Link to={"/error"} className="underline">
              Not Found Page
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
