import { Link } from "react-router-dom";

export default function Specialty() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 text-center">
      <h1 className="text-4xl font-medium">Find by Specialty</h1>
      <p className=" text-center text-lg">
        Simply browse through our extensive list of trusted doctors,
        <br /> schedule your appointment hassle-free.
      </p>

      <div className=" flex  flex-wrap justify-center gap-10  pt-5 w-full ">
        <Link
          to="/doctors?speciality=General Physician"
          className="flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500  "
        >
          <img loading="lazy" className="w-24 sm:w-32 mb-2" src="/Pediatricians-C6nmx5n8.svg" alt="" />
          <p>General Physician</p>
        </Link>
        <Link
          to="/doctors?speciality=Gynecologist"
          className="flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500  "
        >
          <img loading="lazy" className="w-24 sm:w-32 mb-2" src="/kaleb.svg" alt="" />
          <p>Gynecologist</p>
        </Link>
        <Link
          to="/doctors?speciality=Dermatologist"
          className="flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500  "
        >
          <img loading="lazy" className="w-24 sm:w-32 mb-2" src="/Neurologist-CuaLxNpX.svg" alt="" />
          <p>Dermatologist</p>
        </Link>
        <Link
          to="/doctors?speciality=Gastroenterologist"
          className="flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500  "
        >
          <img loading="lazy" className="w-24 sm:w-32 mb-2" src="/ahmel.svg" alt="" />
          <p>Gastroenterologist</p>
        </Link>
        <Link
          to="/doctors?speciality=Pediatrician"
          className="flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500  "
        >
          <img loading="lazy" className="w-24 sm:w-32 mb-2" src="/download.svg" alt="" />
          <p>Pediatricians</p>
        </Link>
        <Link
          to="/doctors/doctors?speciality=Cardiologist"
          className="flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500  "
        >
          <img loading="lazy" className="w-24 sm:w-32 mb-2" src="/download (1).svg" alt="" />
          <p>Cardiologist</p>
        </Link>
      </div>
    </div>
  );
}
