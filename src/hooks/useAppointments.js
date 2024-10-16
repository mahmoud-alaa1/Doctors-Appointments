import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { jwtDecode } from "jwt-decode";

function useAppointments() {
  const [appointments, setAppointments] = useState({});
  const [isPending, setIsPending] = useState(true);
  const { user } = useUser();
  const decodedUser = user && jwtDecode(user);
  useEffect(() => {
    async function fetchAppointments() {
      try {
        setIsPending(true);
        const response = await axios.get(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/appointments`, {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json",
          },
          params: {
            user_id: `eq.${decodedUser.sub}`,
          },
        });
        setAppointments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsPending(false);
      }
    }
    fetchAppointments();
  }, [decodedUser.sub]);
  return { appointments, isPending };
}

export default useAppointments;
