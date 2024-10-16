import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function useDoctor(id) {
  const [doctor, setDoctor] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { doctorId } = useParams();

  useEffect(() => {
    async function fetchDoctors() {
      setIsPending(true);
      setError(null);

      try {
        const response = await axios.get(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/doctors`, {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY, // Ensure this key is correct
            "Content-Type": "application/json",
          },
          params: {
            id: `eq.${id ?? doctorId}`,
          },
        });
        setDoctor(response.data[0]);
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
        console.error(error);
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    }
    fetchDoctors();
  }, [doctorId]);

  return { doctor, isPending, error };
}

export default useDoctor;
