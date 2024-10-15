import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

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
          select: "*", // Fetch all columns from doctors table
        },
      });
      setDoctors(response.data); // Axios automatically parses JSON
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error(error);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    fetchDoctors();
  }, []);

  return { doctors, isPending, error };
}

export default useDoctors;
