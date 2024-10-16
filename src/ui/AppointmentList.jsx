import { jwtDecode } from "jwt-decode";
import useAppointments from "../hooks/useAppointments";
import AppointmentItem from "./AppointmentItem";
import PageLoader from "./PageLoader";
import { useUser } from "../context/userContext";

function AppointmentList() {
  const { user } = useUser();
  const decodedUser = user && jwtDecode(user);
  const { appointments, isPending } = useAppointments({ user_id: `eq.${decodedUser.sub}` });
  if (isPending) return <PageLoader />;
  return (
    <ul className="flex flex-col gap-5">
      {appointments.map(({ doctor_id, user_id, time }) => (
        <li className="border-b pb-3" key={doctor_id + user_id}>
          <AppointmentItem time={time} doctorId={doctor_id} />
        </li>
      ))}
    </ul>
  );
}

export default AppointmentList;
