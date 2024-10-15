import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col  gap-3 text-center justify-center items-center">
      <img loading="lazy" className="" width={400} height={400} src="/not-found.png" alt="" />
      <p className="font-semibold">Oops something went wrong!</p>
      <Link className=" py-2 px-4 font-semibold bg-primary w-fit rounded-full text-white" to="/">
        Go Home Page
      </Link>
    </div>
  );
}

export default NotFound;
