import axios from "axios";
import React, { useState } from "react";
import { useChatStore } from "../../stores/useChatStore";

const SearchUser = () => {
  const [friend, setFriend] = useState({});
  const [showFriendMenu, setShowFriendMenu] = useState(false);
  const [searchFriend, setSearchFriend] = useState("");
  const { setAllConversations } = useChatStore();
  const handleFindFriend = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${import.meta.env.VITE_CLOUDINARY_SERVER_URL}/user/find`,
        {
          username: searchFriend,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setFriend(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setShowFriendMenu((prev) => !prev);
    }
  };

  const getUserConversations = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_CLOUDINARY_SERVER_URL}/conversations`,
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      setAllConversations(res.data.conversations);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(friend)

  const handleAddFriend = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${import.meta.env.VITE_CLOUDINARY_SERVER_URL}/conversations`,
        {
          participantUsername: friend.user?.username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      getUserConversations();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col  px-2 items-center justify-center ">
      <div className="flex rounded-full py-1 bg-white w-full">
        <input
          type="text"
          className="w-full bg-[#0d1829] flex bg-transparent pl-4 text-black outline-0"
          placeholder="Search"
          value={searchFriend}
          onChange={(e) => setSearchFriend(e.target.value)}
        />
        <button
          className="relative px-2 rounded-full"
          onClick={handleFindFriend}
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
      </div>
      {showFriendMenu && (
        <div className="z-10 flex gap-y-4 px-12 flex-col items-center justify-center absolute mt-2 top-36 text-black rounded-md bg-white  h-32">
          <div className="flex flex-row space-x-2 items-center">
            <img src={friend.user?.profileImg} className="w-10 h-10 bg-black rounded-full object-contain" alt="" />
            <h2>{friend.user?.username}</h2>
          </div>
          <button
            className="bg-blue-500 text-white text-xs p-2 rounded-md"
            onClick={handleAddFriend}
          >
            Add User
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
