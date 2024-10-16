import { useState } from "react";
import { useUser } from "../context/userContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";

function useUpdateUser() {
  const [isPending, setIsPending] = useState(false); // Default should be false
  const { user } = useUser();
  const decodedUser = user ? jwtDecode(user) : null;

  const uploadImageToSupabase = async (file) => {
    console.log("Uploading image to Supabase....");
    try {
      const filePath = `imgs/${new Date().getTime()}_${file.name}`;
      const storageUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/${filePath}`;

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(storageUrl, formData, {
        headers: {
          apikey: import.meta.env.VITE_SUPABASE_KEY,
          Authorization: `Bearer ${user}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 || response.status === 201) {
        const imageUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${filePath}`;
        return imageUrl;
      } else {
        console.error("Error uploading file:", response.data);
        return null;
      }
    } catch (error) {
      toast.error("An error occurred while uploading the image");
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const uploadUserData = async (userData, setData) => {
    setIsPending(true);
    let image = userData.image;

    if (image instanceof File) {
      image = await uploadImageToSupabase(image);
      setData((prevData) => ({ ...prevData, image }));
    }

    try {
      const { address, birthday, name, gender, phone } = userData;

      const response = await axios.patch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/users?auth_id=eq.${decodedUser.sub}`,
        {
          address,
          birthday,
          name,
          gender,
          image,
          phone,
        },
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_KEY,
            Authorization: `Bearer ${user}`,
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

  return { isPending, uploadUserData };
}

export default useUpdateUser;
