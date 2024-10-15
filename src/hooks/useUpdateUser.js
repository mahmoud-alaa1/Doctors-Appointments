import { useState } from "react";
import { useUser } from "../context/userContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";

function useUpdateUser() {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();
  const decodedUser = user ? jwtDecode(user) : null;
  const uploadImageToSupabase = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/imgs/${file.name}${new Date().getTime()}`,
        formData,
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY, // Ensure this key is correct
            "Content-Type": "application/json",
          },
        }
      );

      return `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/imgs/${file.name}${new Date().getTime()}`;
    } catch (error) {
      toast.error("An error occurred while uploading the image");
      console.error("Error uploading image:", error);
    }
  };

  const uploadUserData = async (userData) => {
    setIsPending(true);
    let image = userData.image;



    try {
      const { address, birthday, name, gender } = userData;

      const response = await axios.patch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/public/users?auth_id=eq.${decodedUser.sub}`,
        {
          address,
          birthday,
          name,
          gender,
          image,
        },
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Error updating user data");
      console.error("Error uploading user data:", error);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, error, uploadUserData };
}

export default useUpdateUser;
