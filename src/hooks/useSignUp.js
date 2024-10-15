import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function useSignUp() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const signUp = async ({ email, password, fullName }) => {
    try {
      setIsPending(true);

      // Step 1: Sign up the user
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

      // Step 2: Insert additional user information into the profiles table
      await axios.post(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/users`,
        {
          name: fullName,
          role: "guest",
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
      toast.success("Your account is successfully created!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.msg || "An error occurred");
    } finally {
      setIsPending(false);
    }
  };
  return { data, isPending, signUp };
}

export default useSignUp;
