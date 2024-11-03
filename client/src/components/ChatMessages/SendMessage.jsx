import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import EmojiPicker from "emoji-picker-react";
import { useChatStore } from "../../stores/useChatStore";
import axios from "axios";
import { useUserStore } from "../../stores/useUserStore";
import socket from "../../utils/socket";

const SendMessage = () => {
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const {
    conversationId,
  } = useChatStore();
  const { userProfile } = useUserStore();



  const onEmojiClick = (e) => {
    setMessage((prev) => prev + e.emoji);
  };

  const handleSendMessage = async (e) => {
    try {
      e.preventDefault();

      await axios.post(
        `${
          import.meta.env.VITE_CLOUDINARY_SERVER_URL
        }/messages/${conversationId}`,
        {
          chatMessage: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const newMessage = {
        _id: Date.now(),
        chatMessage: message,
        sender: { username: userProfile.username },
        timestamp: new Date(),
        conversationId,
      };

      socket.emit("sendMessage", newMessage);
      setMessage("");
      setToggleEmoji(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        className={clsx("text-black rounded-2xl transition-all duration-200", {
          "-rotate-45 ": message,
        })}
        onClick={handleSendMessage}
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
  );
};

export default SendMessage;
