import { useState } from "react";

function Profile() {
  const [profileData, setProfileData] = useState({
    fullName: "Mahmoud Dardier",
    image: "/default-avatar.png",
    email: "Mahmoud.mostafa4467@gmail.com",
    phone: "+20 1122 164 369",
    address: "El-Sheikh Zayed, 6 Of Ocotber",

    gender: "Male",
    bithday: "1999-03-21",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(profileData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg flex flex-col gap-2 text-md m-auto text-center font-outfit">
      <label className="cursor-pointer">
        <input
          type="file"
          hidden
          onChange={e =>
            setProfileData(defualtData => ({
              ...defualtData,
              image: e.target.value,
            }))
          }
        />
        <img
          className="w-[20%] rounded opacity-75 m-auto"
          src={profileData.image}
          alt="defult image"
        />
      </label>

      {isEditing ? (
        <input
          className="text-center mt-2 text-3xl font-medium"
          type="text"
          value={profileData.fullName}
          onChange={e =>
            setProfileData(defualtData => ({
              ...defualtData,
              fullName: e.target.value,
            }))
          }
        />
      ) : (
        <p className="text-center mt-2 text-3xl font-medium cursor-not-allowed">
          {profileData.fullName}
        </p>
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
                className="pl-2"
                type="text"
                value={profileData.phone}
                onChange={e =>
                  setProfileData(defualtData => ({
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
                  value={profileData.address}
                  type="text"
                  onChange={e =>
                    setProfileData(defualtData => ({
                      ...defualtData,
                      address: {
                        ...defualtData,
                        address: e.target.value,
                      },
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
        <p className="text-start underline text-sm text-gray-700 mt-5">
          BASIC INFORMATION
        </p>
        <div className="flex flex-col mt-3 ">
          <div className="flex flex-row gap-32 mb-2">
            <p className="text-gray-800 text-sm font-medium">Gender:</p>
            {isEditing ? (
              <select
                value={profileData.gender}
                onChange={e =>
                  setProfileData(defualtData => ({
                    ...defualtData,
                    gender: e.target.value,
                  }))
                }>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400 cursor-not-allowed">
                {profileData.gender}
              </p>
            )}
          </div>

          <div className="flex flex-row gap-32 mb-2">
            <p className="text-gray-800 text-sm font-medium">Birthday:</p>
            {isEditing ? (
              <input
                type="date"
                value={profileData.bithday}
                onChange={e =>
                  setProfileData(defualtData => ({
                    ...defualtData,
                    bithday: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="text-gray-400 cursor-not-allowed">
                {profileData.bithday}
              </p>
            )}
          </div>
        </div>

        <div className="text-start mt-8 ">
          {isEditing ? (
            <button
              type="submit"
              className="border-2 border-indigo-600 rounded-3xl py-2 px-8 hover:bg-primary hover:text-white transition-all"
              onClick={() => {
                setIsEditing(false);
              }}>
              Save Information
            </button>
          ) : (
            <button
              className="border-2 border-indigo-600  rounded-3xl py-2 px-8 hover:bg-primary hover:text-white transition-all"
              onClick={() => {
                setIsEditing(true);
              }}>
              Edit
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default Profile;
