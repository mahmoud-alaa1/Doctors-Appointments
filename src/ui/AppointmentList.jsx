import { jwtDecode } from "jwt-decode";
import useAppointments from "../hooks/useAppointments";
import AppointmentItem from "./AppointmentItem";
import PageLoader from "./PageLoader";
import { useUser } from "../context/UserContext";

function AppointmentList() {
  const { user } = useUser();
  const decodedUser = user && jwtDecode(user);
  const { appointments, isPending } = useAppointments({ user_id: `eq.${decodedUser.sub}` });
  if (isPending) return <PageLoader />;
  console.log(appointments);
  return (
    <ul className="flex flex-col gap-5">
      {appointments.map(({ doctor_id, time }) => {
        return (
          <li className="border-b pb-3" key={time}>
            <AppointmentItem time={time} doctorId={doctor_id} />
          </li>
        );
      })}
    </ul>
  );
}

export default AppointmentList;
