import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      Not Found
      <Link className="underline" to="/">Got to Home Page</Link>
    </div>
  );
}

export default NotFound;
