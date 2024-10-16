import toast from "react-hot-toast";
import useBooking from "../hooks/useBooking";
import useFormData from "../hooks/useFormData";
import { getDate, getHour } from "../lib";
import Slot from "./Slot";
import Spinner from "./Spinner";
import SubmitButton from "./SubmitButton";
import { useUser } from "../context/UserContext";
import { jwtDecode } from "jwt-decode";
import useAppointments from "../hooks/useAppointments";

function BookingForm({ doctor }) {
  const { formData, handleData } = useFormData({});
  const { isPending, submitBooking } = useBooking();
  const { user } = useUser();
  const decodedUser = user ? jwtDecode(user) : null;
  const expiresIn = decodedUser ? new Date(decodedUser.exp * 1000) : null;
  const { appointments } = useAppointments(doctor?.id ? { select: "time", doctor_id: `eq.${doctor.id}` } : {});
  const { maxHourPerDay } = doctor || 0;
  console.log(appointments);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login to book an appointment");
    } else if (expiresIn < new Date()) {
      toast.error("Your session has expired. Please login again");
    } else if (!formData.day) {
      toast.error("Please select a day");
    } else if (!formData.hour) {
      toast.error("Please select a time");
    } else {
      submitBooking(formData, doctor.id, decodedUser.sub, user);
    }
  };
  if (!doctor) return null;

  return (
    <form onSubmit={handleSubmit} onChange={(e) => handleData(e)} className="text-center">
      <div className="flex flex-wrap justify-center my-10 gap-6">
        {Array.from({ length: 7 }).map((_, i) => {
          const { day, weekday, calender } = getDate(i);
          const disabled =
            appointments.length > 0
              ? appointments.map((elem) => elem.time).includes(calender + "-" + formData.hour)
              : false;
          return (
            <Slot disabled={disabled} className="py-8 px-2" key={day + weekday} active={formData.day == calender}>
              <span className="uppercase">
                {weekday} <br />
              </span>
              <span>{day}</span>
              <input disabled={disabled} value={calender} className="hidden" name="day" type="radio" />
            </Slot>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-7 gap-6">
        {Array.from({ length: maxHourPerDay }).map((_, i) => {
          const disabled =
            appointments.length > 0
              ? appointments.map((elem) => elem.time).includes(formData.day + "-" + (9 + i))
              : false;
          console.log(formData.day + "-" + (9 + i));
          return (
            <Slot disabled={disabled} className={`py-1 px-4 w-fit`} key={`hour-${i}`} active={formData.hour == 9 + i}>
              {getHour(9, i)}
              <input disabled={disabled} value={9 + i} className="hidden" name="hour" type="radio" />
            </Slot>
          );
        })}
      </div>
      <SubmitButton className="px-5 shadow-lg text-xl">Book Appointment &nbsp;{isPending && <Spinner />}</SubmitButton>
    </form>
  );
}

export default BookingForm;
