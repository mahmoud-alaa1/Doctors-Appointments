import axios from "axios";
import { useEffect, useState } from "react";

function useAppointments(params) {
  const [appointments, setAppointments] = useState({});
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    async function fetchAppointments() {
      try {
        setIsPending(true);
        const response = await axios.get(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/appointments`, {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json",
          },
          params,
        });
        setAppointments(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsPending(false);
      }
    }
    fetchAppointments();
  }, []);
  return { appointments, isPending };
}

export default useAppointments;
