import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";

function useUserData() {
  const [profileData, setProfileData] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();
  const decodedUser = user ? jwtDecode(user) : null;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsPending(true);
        const response = await axios.get(
          `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/users?auth_id=eq.${decodedUser.sub}`,
          {
            headers: {
              apikey: import.meta.env.VITE_SUPABASE_KEY,
              Authorization: `Bearer ${user}`,
              "Content-Type": "application/json",
            },
            select: "*",
          }
        );
        setProfileData(response.data[0]);
      } catch (error) {
        setError(error);
        toast.error(error.response?.data?.msg || "An error occurred");
        console.error(error);
      } finally {
        setIsPending(false);
      }
    };
    fetchUserData();
  }, [decodedUser.sub, user]);

  return { profileData, setProfileData, isPending, error };
}

export default useUserData;
