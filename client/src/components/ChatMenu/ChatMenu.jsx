import React from "react";
import UserProfile from "./UserProfile";
import SearchUser from "./SearchUser";
import UserConversations from "./UserConversations";
const ChatMenu = () => {

  return (
    <>
      <UserProfile />
      <SearchUser />
      <UserConversations />
    </>
  );
};

export default ChatMenu;
