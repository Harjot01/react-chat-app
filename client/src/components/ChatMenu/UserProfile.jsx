import React, { useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
import toast from "react-hot-toast";
import axios from "axios";

const UserProfile = () => {
  const { setIsLoading, userProfile, setIsAuthenticated } = useUserStore();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogoutUser = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:5000/api/v1/user/logout", {
        withCredentials: true,
      });

      setIsAuthenticated(false);

      toast.success(res.data.message);
    } catch (error) {
      setIsAuthenticated(true);
      toast.error("Some Error Occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-between text-black p-6">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-500 rounded-full">
          <img
            className="w-10 h-10 rounded-full object-contain"
            src="https://avatarfiles.alphacoders.com/364/thumb-350-364417.webp"
            alt=""
          />
        </div>
        <div className="-space-y-1">
          <h2 className="text-md font-bold">{userProfile.name}</h2>
          <p className="text-xs">{userProfile.username}</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button>
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
        <button onClick={() => setShowMenu(!showMenu)}>
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
            <title>menu</title>
            <path
              fill="currentColor"
              d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
            ></path>
          </svg>
        </button>

        {showMenu && (
          <div className="z-10 absolute top-24 block  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul
              class="py-2 text-sm text-gray-700 "
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                  Earnings
                </a>
              </li>
              <li>
                <button
                  className="block text-start w-full px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogoutUser}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
