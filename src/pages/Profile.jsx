import { useState } from "react";
import useUserData from "../hooks/useUserData";
import PageLoader from "../ui/PageLoader";
import useUpdateUser from "../hooks/useUpdateUser";

function Profile() {
  const { profileData, setProfileData, error, isPending } = useUserData();
  const { isPending: isPendingUploading, uploadUserData } = useUpdateUser();
  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData((defualtData) => ({
          ...defualtData,
          image: file, // Set the base64 image data
        }));
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadUserData(profileData, setProfileData);
  };

  if (isPending) return <PageLoader />;
  console.log(profileData);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-md m-auto text-center font-outfit">
      <label className={`${isEditing ? "cursor-pointer" : "cursor-not-allowed"} `}>
        <input disabled={!isEditing} type="file" hidden onChange={handleFileChange} />
        <img
          onError={(e) => {
            e.target.src = "/default-avatar.png";
            e.target.error = null;
          }}
          src={profileData.image || "/default-avatar.png"}
          className="w-[300px] aspect-square rounded-full rounded opacity-75 m-auto"
          alt="defult image"
        />
      </label>

      {isEditing ? (
        <input
          className="text-center mt-2 text-3xl font-medium border"
          type="text"
          value={profileData.name || "No name"}
          onChange={(e) =>
            setProfileData((defualtData) => ({
              ...defualtData,
              name: e.target.value,
            }))
          }
        />
      ) : (
        <p className="text-center mt-2 text-3xl font-medium cursor-not-allowed">{profileData.name}</p>
      )}

      <hr />
      <div className="text-start mt-4 ">
        <p className="underline text-sm text-gray-700">CONTACT INFORMATION</p>
        <div className="flex flex-col mt-3 ">
          <div className="flex flex-row gap-32 mb-2">
            <p className="text-gray-800 text-sm font-medium">Email id:</p>
            <p className="cursor-not-allowed">{profileData.email}</p>
          </div>
          <div className="flex flex-row gap-32 mb-2">
            <p className="text-gray-800 text-sm font-medium">Phone:</p>
            {isEditing ? (
              <input
                className="p-2 border"
                type="text"
                value={profileData.phone || "no phone"}
                onChange={(e) =>
                  setProfileData((defualtData) => ({
                    ...defualtData,
                    phone: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="cursor-not-allowed pl-2">{profileData.phone}</p>
            )}
          </div>

          <div className="flex flex-row gap-32 mb-2">
            <p className="text-gray-800 text-sm font-medium">Address:</p>
            {isEditing ? (
              <p>
                <input
                  className="border p-2"
                  value={profileData.address || "no address"}
                  type="text"
                  name="address"
                  autoComplete="address"
                  onChange={(e) =>
                    setProfileData((defualtData) => ({
                      ...defualtData,
                      address: e.target.value,
                    }))
                  }
                />
                <br />
              </p>
            ) : (
              <p className="cursor-not-allowed">{profileData.address}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className="text-start underline text-sm text-gray-700 mt-5">BASIC INFORMATION</p>
        <div className="flex flex-col mt-3 ">
          <div className="flex flex-row gap-32 mb-2">
            <p className="text-gray-800 text-sm font-medium">Gender:</p>
            {isEditing ? (
              <select
                value={profileData.gender || "no gender"}
                onChange={(e) =>
                  setProfileData((defualtData) => ({
                    ...defualtData,
                    gender: e.target.value,
                  }))
                }
              >
                <option value="unknown">unknown</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400 cursor-not-allowed">{profileData.gender}</p>
            )}
          </div>

          <div className="flex flex-row gap-32 mb-2">
            <p className="text-gray-800 text-sm font-medium">Birthday:</p>
            {isEditing ? (
              <input
                type="date"
                value={profileData.bithday}
                onChange={(e) => {
                  setProfileData((defualtData) => ({
                    ...defualtData,
                    bithday: e.target.value,
                  }));
                }}
              />
            ) : (
              <p className="text-gray-400 cursor-not-allowed">{profileData.birthday}</p>
            )}
          </div>
        </div>

        <div className="text-start mt-8 ">
          {isEditing ? (
            <button
              type="submit"
              className="border-2 border-indigo-600 rounded-3xl py-2 px-8 hover:bg-primary hover:text-white transition-all"
              onClick={(e) => {
                handleSubmit(e);
                setIsEditing(false);
              }}
            >
              Save Information
            </button>
          ) : (
            <button
              type="button"
              className={`${
                isPendingUploading ? "bg-primary" : ""
              } border-2 border-indigo-600  rounded-3xl py-2 px-8 hover:bg-primary hover:text-white transition-all`}
              onClick={() => {
                setIsEditing(true);
              }}
            >
              {isPendingUploading ? "Uploading..." : "Edit Information"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
