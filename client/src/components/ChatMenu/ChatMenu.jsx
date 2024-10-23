import React, { useState } from "react";
import { Users } from "../../lib/users";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserStore } from "../../stores/useUserStore";
import UserProfile from "./UserProfile";
import SearchUser from "./SearchUser";
const ChatMenu = () => {
  return (
    <>
      <UserProfile />
      <SearchUser />
      <div className="text-black mt-8 flex flex-col h-[77vh] overflow-y-auto">
        {Users.map((user) => (
          <div className="hover:bg-gray-300 w-full p-4  cursor-pointer">
            <div
              className="flex justify-between w-full max-w-[500px]  "
              key={user.id}
            >
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-500 rounded-full">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={user.imageurl}
                    alt=""
                  />
                  <div className="relative left-7 bottom-2 text-sm bg-green-500 rounded-full w-3 h-3"></div>
                </div>
                <div className="">
                  <h2 className="text-md font-bold">{user.username}</h2>
                  <p className="text-xs">Hi, are you available tomorrow?</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-sm">10:10 AM</p>
                <p className=" text-center text-xs bg-blue-500 rounded-full text-white h-4 w-4">
                  1
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatMenu;
