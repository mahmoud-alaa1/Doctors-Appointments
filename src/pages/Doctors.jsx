import AllDoctors from "../ui/AllDoctors";
import DoctorFilter from "../ui/DoctorFilter";

function Doctors() {
  return (
    <div className="flex gap-10 sm:flex-row flex-col">
      <DoctorFilter />
      <AllDoctors />
    </div>
  );
}

export default Doctors;
