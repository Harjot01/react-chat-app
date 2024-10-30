import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import SendMessage from "./SendMessage";
import AllMessages from "./AllMessages";

const ChatMessages = () => {
  return (
    <div className="flex flex-col h-full">
      <FriendProfile />

      <AllMessages />

      <SendMessage />
    </div>
  );
};

export default ChatMessages;
