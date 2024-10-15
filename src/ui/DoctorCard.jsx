import { Link } from "react-router-dom";
import { imagePath } from "../constants";

function DoctorCard({ name = "unknown", speciality = "unknown", id = 0 }) {
  return (
    <div className="max-w-[400px] mx-auto border border-blue-200 rounded-xl overflow-hidden h-fit  hover:translate-y-[-10px] transition-all duration-500">
      <Link to={`/doctors/${id}`}>
        <img loading="lazy" className=" bg-blue-50 w-full" src={`${imagePath}doc-${id}.png`} />
        <div className=" p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
            <p>Available</p>
          </div>
          <p className=" text-gray-900 text-lg font-medium">{name}</p>
          <p className=" text-gray-600 text-sm"> {speciality}</p>
        </div>
      </Link>
    </div>
  );
}

export default DoctorCard;
