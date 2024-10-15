import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useBooking() {
  const [booking, setBooking] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  async function submitBooking({ day, hour }, doctorId, userId, token) {

    try {
      setIsPending(true);
      const response = await axios.post(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/appointments`,
        {
          time: `${day}T${hour}`,
          user_id: userId,
          doctor_id: doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            apikey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("The booking was successful");
      setBooking(booking);
      navigate("/appointments");
    } catch (error) {
      toast.error("An error occurred. Please try again");
      console.error(error);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  }
  return { booking, isPending, error, submitBooking };
}

export default useBooking;
