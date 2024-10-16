import { Link } from "react-router-dom";

export default function Specialty() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Specialty</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      <div className=" flex  flex-wrap justify-center gap-4 pt-5 w-full ">
        <Link className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
          <img loading="lazy" className="w-16 sm:w-24 mb-2" src="/Pediatricians-C6nmx5n8.svg" alt="" />
          <p>Pediatricians</p>
        </Link>
        <Link className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
          <img loading="lazy" className="w-16 sm:w-24 mb-2" src="/kaleb.svg" alt="" />
          <p>Pediatricians</p>
        </Link>
        <Link className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
          <img loading="lazy" className="w-16 sm:w-24 mb-2" src="/Neurologist-CuaLxNpX.svg" alt="" />
          <p>Pediatricians</p>
        </Link>
        <Link className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
          <img loading="lazy" className="w-16 sm:w-24 mb-2" src="/ahmel.svg" alt="" />
          <p>Pediatricians</p>
        </Link>
        <Link className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
          <img loading="lazy" className="w-16 sm:w-24 mb-2" src="/download.svg" alt="" />
          <p>Pediatricians</p>
        </Link>
        <Link className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
          <img loading="lazy" className="w-16 sm:w-24 mb-2" src="/download (1).svg" alt="" />
          <p>Pediatricians</p>
        </Link>
      </div>
    </div>
  );
}
