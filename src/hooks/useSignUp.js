import { useState } from "react";
import axios from "axios";

function useSignUp() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const signUp = async ({ email, password }) => {
    console.log(email, password);
    try {
      setIsPending(true);
      const response = await axios.post(
        `${import.meta.env.VITE_SUPABASE_URL}/auth/v1/signup`,
        {
          email,
          password,
        },
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      setData(response.data);
    } catch (error) {
      setError(error.response?.data?.msg || "An error occurred");
    } finally {
      setIsPending(false);
    }
  };
  return { data, error, isPending, signUp };
}

export default useSignUp;
