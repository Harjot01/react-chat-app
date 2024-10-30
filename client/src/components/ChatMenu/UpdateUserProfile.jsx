import React, { useEffect, useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
import axios from "axios";

const UpdateUserProfile = () => {
  const { setShowUpdateProfileMenu, userProfile, setUserProfile } =
    useUserStore();
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isAboutEditing, setIsAboutEditing] = useState(false);
  const [name, setName] = useState(userProfile.name);
  const [about, setAbout] = useState(userProfile.about);

  const handleFetchUserProfile = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_CLOUDINARY_SERVER_URL}/user/profile`,
        {
          withCredentials: true,
        }
      );
      setUserProfile(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = async (field, value) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_CLOUDINARY_SERVER_URL}/user/update/${field}`,
        {
          value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      handleFetchUserProfile();

      setIsNameEditing(false);
      setIsAboutEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center  text-black  ">
      <div className="flex justify-between w-full items-center px-6 py-2 gap-x-6">
        <p className="text-md p-2 font-bold">Profile</p>
        <button onClick={() => setShowUpdateProfileMenu(false)}>
          {" "}
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            class=""
            fill="currentColor"
            enable-background="new 0 0 24 24"
          >
            <title>x</title>
            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
          </svg>
        </button>
      </div>

      <div className="w-full space-y-12 pb-2 ">
        <div className="w-full ">
          <img
            className="mx-auto rounded-full w-1/2 h-1/2 object-contain hover:blur-sm transition-all duration-500 "
            src={userProfile.profileImg}
            alt=""
            
          />
        </div>
        <div className="px-4 space-y-2">
          <h2 className="font-bold text-lg">Your name</h2>
          {isNameEditing ? (
            <div className="flex h-full items-center justify-between">
              <input
                type="text"
                className="text-sm bg-[#f0f0f0]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <button onClick={() => handleUpdateProfile("name", name)}>
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  class=""
                  version="1.1"
                  x="0px"
                  y="0px"
                  enable-background="new 0 0 24 24"
                >
                  <title>checkmark</title>
                  <path
                    fill="currentColor"
                    d="M9,17.2l-4-4l-1.4,1.3L9,19.9L20.4,8.5L19,7.1L9,17.2z"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex  items-center justify-between">
              <p className="text-sm">{userProfile.name}</p>
              <button onClick={() => setIsNameEditing(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.4,4.4l1.2,1.2L6.2,19H5v-1.2L18.4,4.4 M18.4,2c-0.3,0-0.5,0.1-0.7,0.3L3,17v4h4L21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6 C18.9,2.1,18.7,2,18.4,2L18.4,2z"></path>
                  <path
                    d="M15.8 4.3H17.8V9.2H15.8z"
                    transform="rotate(-45.001 16.75 6.75)"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="px-4 space-y-2">
          <h2 className="font-bold text-lg">About</h2>
          {isAboutEditing ? (
            <div className="flex h-full items-center justify-between">
              <input
                type="text"
                className="text-sm bg-[#f0f0f0]"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                autoFocus
              />
              <button onClick={() => handleUpdateProfile("about", about)}>
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  class=""
                  version="1.1"
                  x="0px"
                  y="0px"
                  enable-background="new 0 0 24 24"
                >
                  <title>checkmark</title>
                  <path
                    fill="currentColor"
                    d="M9,17.2l-4-4l-1.4,1.3L9,19.9L20.4,8.5L19,7.1L9,17.2z"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex  items-center justify-between">
              <p className="text-sm">{userProfile.about}</p>
              <button onClick={() => setIsAboutEditing(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.4,4.4l1.2,1.2L6.2,19H5v-1.2L18.4,4.4 M18.4,2c-0.3,0-0.5,0.1-0.7,0.3L3,17v4h4L21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6 C18.9,2.1,18.7,2,18.4,2L18.4,2z"></path>
                  <path
                    d="M15.8 4.3H17.8V9.2H15.8z"
                    transform="rotate(-45.001 16.75 6.75)"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
