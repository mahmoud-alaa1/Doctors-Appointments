import { Link } from "react-router-dom";

function LinkUi({ className, to, children }) {
  return (
    <Link to={to} className={`rounded-full p-4 flex items-center ${className}`}>
      {children}
    </Link>
  );
}

export default LinkUi;
