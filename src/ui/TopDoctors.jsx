import useDoctors from "../hooks/useDoctors";
import Spinner from "./Spinner";
import TopDoctor from "./TopDoctor";

export default function TopDoctors() {
  const { doctors, error, isPending } = useDoctors();
  console.log(doctors);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors</p>

      {isPending ? (
        <Spinner />
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 gap-4 pt-5 px-2 sm:px-0">
          {doctors.map((doctor) => (
            <TopDoctor key={doctor.id + doctor.name} name={doctor.name} id={doctor.id} speciality={doctor.speciality} />
          ))}
        </div>
      )}

      <button className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">More</button>
    </div>
  );
}
