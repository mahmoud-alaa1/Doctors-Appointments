import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const specialities = [
  "All Specialities",

  "Neurologist",
  "Gynecologist",
  "General Physician",
  "Gastroenterologist",
  "Cardiologist",
  "Dermatologist",
  "Orthopedist",
  "Pediatrician",
  "Psychiatrist",
  "Urologist",
];

function DoctorFilter() {
  let [searchParams, setSearchParams] = useSearchParams();
  const specialitySearch = searchParams?.get("speciality") || "";
  const [open, setOpen] = useState(false);
  function handleClick(e) {
    if (e.target.tagName !== "BUTTON") return;
    searchParams.set("speciality", e.target.textContent);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="bg-indigo-500 sm:hidden text-white px-4 py-3 w-52 rounded-lg mb-5">
        Filter
      </button>
      <ul onClick={handleClick} className={`${open? "hidden" : "flex"} sm:flex sm:flex-col gap-3 flex-wrap`}>
        {specialities.map((speciality) => (
          <li key={speciality}>
            <button
              className={`${
                speciality === specialitySearch ? "bg-indigo-50" : ""
              } px-4 py-3 border sm:w-52 text-left rounded-lg transition-all`}
            >
              {speciality}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorFilter;
