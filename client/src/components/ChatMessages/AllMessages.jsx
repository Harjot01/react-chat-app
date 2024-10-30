import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useChatStore } from "../../stores/useChatStore";
import { useUserStore } from "../../stores/useUserStore";

const AllMessages = () => {
  const { chatMessages, conversationId } = useChatStore();
  const { userProfile } = useUserStore();
  const chatEndRef = useRef(null);


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className="flex-grow px-12 py-2 overflow-y-auto">
      <div className="sticky top-0 text-center text-black ">
        <span className="bg-[#f0f0f0] px-2 py-1 rounded-md">Today</span>
      </div>
      <div
        className="flex py-8 flex-col space-y-6"
      >
        {/* {console.log("The types of chat messages here is ", typeof chatMessage)} */}
        {chatMessages?.map((message) => (
          message.conversationId === conversationId &&
          <Message
            key={message?._id}
            own={
              userProfile?.username === message?.sender?.username ? true : false
            }
            messageText={message.chatMessage}
            timeAgo={message.timestamp}
          />
        ))}
        <div ref={chatEndRef}></div>
      </div>
    </div>
  );
};

export default AllMessages;
