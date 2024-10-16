import toast from "react-hot-toast";
import useBooking from "../hooks/useBooking";
import useFormData from "../hooks/useFormData";
import { getDate, getHour } from "../lib";
import Slot from "./Slot";
import Spinner from "./Spinner";
import SubmitButton from "./SubmitButton";
import { useUser } from "../context/userContext";
import { jwtDecode } from "jwt-decode";
const initialState = {
  day: null,
};

function BookingForm({ doctor }) {
  const { formData, handleData } = useFormData(initialState);
  const { booking, error, isPending, submitBooking } = useBooking();
  const { user } = useUser();
  const decodedUser = user ? jwtDecode(user) : null;
  const expiresIn = decodedUser ? new Date(decodedUser.exp * 1000) : null;

  const { maxHourPerDay } = doctor;

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

  return (
    <form onSubmit={handleSubmit} onChange={handleData} className="text-center">
      <div className="flex flex-wrap justify-center my-10 gap-6">
        {Array.from({ length: 7 }).map((_, i) => {
          const { day, weekday, calender } = getDate(i);
          return (
            <Slot className="py-8 px-2" key={day + weekday} active={formData.day == calender}>
              <span className="uppercase">
                {weekday} <br />
              </span>
              <span>{day}</span>
              <input value={calender} className="hidden" name="day" type="radio" />
            </Slot>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-7 gap-6">
        {Array.from({ length: maxHourPerDay }).map((_, i) => {
          return (
            <Slot className={`py-1 px-4 w-fit`} key={`hour-${i}`} active={formData.hour == 9 + i}>
              {getHour(9, i)}
              <input value={9 + i} className="hidden" name="hour" type="radio" />
            </Slot>
          );
        })}
      </div>
      <SubmitButton className="px-5 shadow-lg text-xl">Book Appointment &nbsp;{isPending && <Spinner />}</SubmitButton>
    </form>
  );
}

export default BookingForm;
