import { useSearchParams } from "react-router-dom";

const specialities = [
  "General Physician",
  "Gynecologist",
  "Gastroenterologist",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedist",
  "Pediatrician",
  "Psychiatrist",
  "Urologist",
];

function DoctorFilter() {
  let [searchParams, setSearchParams] = useSearchParams();
  const specialitySearch = searchParams?.get("speciality") || "";
  function handleClick(e) {
    if (e.target.tagName !== "BUTTON") return;
    searchParams.set("speciality", e.target.textContent);
    setSearchParams(searchParams);
  }
  return (
    <ul onClick={handleClick} className="flex flex-col gap-3">
      {specialities.map((speciality) => (
        <li key={speciality}>
          <button className={`${speciality === specialitySearch ? "bg-indigo-50" : ""} px-4 py-3 border w-64 text-left rounded-lg transition-all`}>
            {speciality}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DoctorFilter;
