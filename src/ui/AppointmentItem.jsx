import useDoctor from "../hooks/useDoctor";
import { formatToCalender } from "../lib";

function AppointmentItem({ time, doctorId }) {
  const { doctor, error, isPending } = useDoctor(doctorId);
  if (isPending) return <div>Loading...</div>;
  return (
    <div className="flex gap-5 sm:flex-row flex-col">
      <div className="bg-blue-50 max-h-44 max-w-44">
        <img className="h-full w-full object-contain" src={doctor.image} alt="" />
      </div>
      <div>
        <h2 className="text-xl text-stone-900">Dr. {doctor.name}</h2>
        <h2 className="text-base text-stone-700 mb-4"> {doctor.speciality}</h2>
        <h2 className="text-base text-stone-800 ">Address:</h2>
        <p className="mb-6">{doctor.address}</p>
        <p>Date & Time: {formatToCalender(time)}</p>
      </div>
    </div>
  );
}

export default AppointmentItem;
