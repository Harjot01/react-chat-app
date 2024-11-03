import React from "react";
import { useChatStore } from "../../stores/useChatStore";
import { useFriendStore } from "../../stores/useFriendStore";

const FriendProfile = () => {
  const { setIsUserInfoVisible } = useChatStore();
  const { friendProfile } = useFriendStore();
  return (
    <div className="flex justify-between items-center  bg-[#f0f0f0] px-6 py-2 text-black">
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={() => setIsUserInfoVisible(true)}
      >
        <div className="w-10 h-10 bg-gray-500 rounded-full">
          <img
            className="w-10 h-10 rounded-full object-contain"
            src={friendProfile.profileImg || "images/user.png"}
            alt=""
          />
        </div>
        <div className="-space-y-1">
          <h2 className="text-md font-bold">{friendProfile.name}</h2>
          <p className="text-xs">Last seen today at 10:10 AM</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="text-sm w-6 h-6">
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
            <title>search-alt</title>
            <path
              fill="currentColor"
              d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
            ></path>
          </svg>
        </button>
        <button className="text-sm w-4 h-4">
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
      </div>
    </div>
  );
};

export default FriendProfile;
