import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useSignIn() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const navigtae = useNavigate();
  const signIn = async ({ email, password }) => {
    try {
      setIsPending(true);

      const response = await axios.post(
        `${
          import.meta.env.VITE_SUPABASE_URL
        }/auth/v1/token?grant_type=password`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY, // Your Supabase anon key
            "Content-Type": "application/json",
          },
        }
      );
      const { access_token } = response.data;
      localStorage.setItem("supabaseToken", access_token);
      setData(response.data);
      toast.success("You successfully logged in!");
      navigtae("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error_description ||
        "An error occurred during sign-in.";
      toast.error(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, signIn };
}

export default useSignIn;
