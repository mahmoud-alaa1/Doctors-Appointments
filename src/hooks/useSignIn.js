import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

function useSignIn() {
  const [isPending, setIsPending] = useState(false);
  const { setUser } = useUser();
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
            apikey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      const { access_token } = response.data;
      localStorage.setItem("supabaseToken", access_token);
      toast.success("You successfully logged in!");
      setUser({ token: access_token });
      navigtae("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error_description ||
        "Your email or password is wrong.";
      toast.error(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, signIn };
}

export default useSignIn;
