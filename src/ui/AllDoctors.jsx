import useDoctors from "../hooks/useDoctors";
import DoctorCard from "./DoctorCard";

function AllDoctors() {
  const { doctors, isPending } = useDoctors();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4  px-2 sm:px-0">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id + doctor.name} name={doctor.name} id={doctor.id} speciality={doctor.speciality} />
      ))}
    </div>
  );
}

export default AllDoctors;
