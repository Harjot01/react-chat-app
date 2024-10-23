import React from "react";
import { useChatStore } from "../../stores/useChatStore";

const UserInfo = () => {
  const { setUserInfoVisible } = useChatStore();

  return (
    <div className="w-full flex flex-col items-center  text-black">
      <div className="flex justify-between w-full items-center px-6 py-2 gap-x-6 bg-white">
        <p className="text-md p-2 font-bold">Contact info</p>
        <button onClick={setUserInfoVisible}>
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

      <div className="w-full space-y-3 pb-2 bg-white">
        <div className="w-full ">
          <img
            className="mx-auto rounded-full w-1/2 object-contain"
            src="https://www.biospectrumindia.com/uploads/articles/xpgonn0x_400x400-15957.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-center font-medium text-lg">Bill Gates</p>
          <p className="text-center text-xs">@bill_gates</p>
        </div>
      </div>

      <div className="w-full pl-8 p-4 mt-2 space-y-2 bg-white">
        <h2 className="font-bold text-md">About</h2>
        <p className="text-sm">Building Microsoft</p>
      </div>
      <div className="w-full mt-2 bg-white p-4 pl-8">
        <h2 className="font-bold text-md">Media, links and docs</h2>
        <div className="grid grid-cols-3 mt-3 pb-2 gap-2">
          <img
            src="https://blog.dailylogochallenge.com/wp-content/uploads/2021/01/gdocs-download-example-1600x900.jpg"
            alt=""
          />
          <img
            src="https://blog.dailylogochallenge.com/wp-content/uploads/2021/01/gdocs-download-example-1600x900.jpg"
            alt=""
          />
          <img
            src="https://blog.dailylogochallenge.com/wp-content/uploads/2021/01/gdocs-download-example-1600x900.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-start pl-8 p-4 mt-2 space-y-3  bg-white">
        <button className="px-2 py-1 text-red-500 font-medium text-md ">
          Block user
        </button>
        <button className="px-2 py-1 text-red-500 font-medium text-md">
          Edit contact
        </button>
        <button className="px-2 py-1 text-red-500 font-medium  text-md">
          Delete chat
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
