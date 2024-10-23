import React, { useState } from "react";
import Message from "./Message";
import { useChatStore } from "../../stores/useChatStore";
import EmojiPicker from "emoji-picker-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const ChatMessages = () => {
  const { setUserInfoVisible } = useChatStore();
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [message, setMessage] = useState("");

  const onEmojiClick = (e) => {
    setMessage((prev) => prev + e.emoji);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center  bg-[#f0f0f0] px-6 py-2 text-black">
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={setUserInfoVisible}
        >
          <div className="w-10 h-10 bg-gray-500 rounded-full">
            <img
              className="w-10 h-10 rounded-full object-contain"
              src="https://www.biospectrumindia.com/uploads/articles/xpgonn0x_400x400-15957.jpg"
              alt=""
            />
          </div>
          <div className="-space-y-1">
            <h2 className="text-md font-bold">Bill Gates</h2>
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

      <div className="flex-grow px-12 py-2 overflow-y-auto">
        <div className="sticky top-0 text-center text-black ">
          <span className="bg-[#f0f0f0] px-2 py-1 rounded-md">Today</span>
        </div>
        <div className="flex py-8 flex-col space-y-6">
          {/* Message 1 */}
          <Message own={false} />
          <Message own={true} />
          <Message own={false} />
          <Message own={true} />
          <Message own={false} />
          <Message own={true} />
          <Message own={false} />
          <Message own={true} />
          <Message own={false} />
          <Message own={true} />
          <Message own={false} />
          <Message own={true} />
          <Message own={false} />
          <Message own={true} />
        </div>
      </div>

      <div className="flex space-x-4 items-center px-4 py-3 bg-gray-200">
        <div className="flex space-x-2">
          <button
            className="text-black"
            onClick={() => setToggleEmoji((prev) => !prev)}
          >
            {toggleEmoji ? (
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
            ) : (
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                class="x23j0i4 xd7y6wv"
                version="1.1"
                x="0px"
                y="0px"
                enable-background="new 0 0 24 24"
              >
                <title>smiley</title>
                <path
                  fill="currentColor"
                  d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
                ></path>
              </svg>
            )}
          </button>

          <AnimatePresence>
            {toggleEmoji && (
              <motion.div
                className="absolute bottom-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </motion.div>
            )}
          </AnimatePresence>

          <button className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="attach-file"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M16.5 6.75v10.58c0 2.09-1.53 3.95-3.61 4.15-2.39.23-4.39-1.64-4.39-3.98V5.14c0-1.31.94-2.5 2.24-2.63 1.5-.15 2.76 1.02 2.76 2.49v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.61c0 1.31.94 2.5 2.24 2.63 1.5.15 2.76-1.02 2.76-2.49V5.17c0-2.09-1.53-3.95-3.61-4.15C9.01.79 7 2.66 7 5v12.27c0 2.87 2.1 5.44 4.96 5.71 3.29.3 6.04-2.26 6.04-5.48V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75z"></path>
            </svg>
          </button>
        </div>

        <textarea
          className="text-black w-full h-10 overflow-y-hidden outline-none resize-none border rounded-md p-2"
          placeholder="Send message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className={
            (clsx("text-black rounded-2xl transition-all duration-200", { "-rotate-45 ": message }))
          }
        >
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
            <title>send</title>
            <path
              fill="currentColor"
              d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatMessages;
