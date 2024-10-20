import { useSearchParams } from "react-router-dom";
import useDoctors from "../hooks/useDoctors";
import DoctorCard from "./DoctorCard";
import PageLoader from "./PageLoader";

function AllDoctors() {
  let { doctors, isPending } = useDoctors();
  console.log(doctors);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("speciality") || "All Specialities";
  if (search !== "All Specialities") {
    doctors = doctors.filter((doctor) => doctor.speciality === search);
  }
  if (isPending) return <PageLoader />;
  return (
    <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4  px-2 sm:px-0">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id + doctor.name} name={doctor.name} id={doctor.id} speciality={doctor.speciality} image={doctor.image} />
      ))}
    </div>
  );
}

export default AllDoctors;
