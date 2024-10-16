import useAppointments from "../hooks/useAppointments";
import useDoctor from "../hooks/useDoctor";
import AppointmentItem from "./AppointmentItem";
import PageLoader from "./PageLoader";

function AppointmentList() {
  const { appointments, isPending } = useAppointments();
  if (isPending) return <PageLoader />;
  return (
    <ul className="flex flex-col gap-5">
      {appointments.map(({ doctor_id, user_id, time }) => (
        <li key={doctor_id + user_id}>
          <AppointmentItem time={time} doctorId={doctor_id} />
        </li>
      ))}
    </ul>
  );
}

export default AppointmentList;
