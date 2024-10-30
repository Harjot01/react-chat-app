import React, { useEffect, useState } from "react";
import axios from "axios";
import { useChatStore } from "../../stores/useChatStore";
import { useFriendStore } from "../../stores/useFriendStore";
import { useUserStore } from "../../stores/useUserStore";
import { format } from "timeago.js";

const UserConversations = () => {
  const { setFriendProfile } = useFriendStore();
  const { allConversations } = useChatStore();
  const { setShowChats, setConversationId, setChatMessages } = useChatStore();
  const { userProfile } = useUserStore();

  const handleFetchChatMessages = async (conversationId, friend) => {
    try {
      // const res = await axios.get(
      //   `${
      //     import.meta.env.VITE_CLOUDINARY_SERVER_URL
      //   }/conversations/${conversationId}/messages`,
      //   {
      //     withCredentials: true,
      //   }
      // );
      console.log(conversationId);
      // setChatMessages(res.data.messages);
      setConversationId(conversationId);
      setFriendProfile(friend);
      setShowChats(true);
    } catch (error) {
      console.log(error);
      setShowChats(false);
    }
  };

  return (
    <div className="text-black mt-8 flex flex-col h-[77vh] overflow-y-auto">
      {allConversations?.map((conversation) => {
        const { participants, lastMessage } = conversation;
        const friend = participants.find(
          (participant) => participant.username !== userProfile.username
        );
        return (
          <div
            className="hover:bg-gray-300 w-full p-4  cursor-pointer"
            key={conversation._id}
            onClick={() => handleFetchChatMessages(conversation._id, friend)}
          >
            <div className="flex justify-between w-full max-w-[500px]  ">
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-500 rounded-full">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={friend.profileImg}
                    alt=""
                  />
                  <div className="relative left-7 bottom-2 text-sm bg-green-500 rounded-full w-3 h-3"></div>
                </div>
                <div className="">
                  <h2 className="text-md font-bold">{friend?.name}</h2>
                  <p className="text-xs">{lastMessage?.chatMessage}</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-sm">
                  {format(conversation.lastMessage?.timestamp)}
                </p>
                <p className=" text-center text-xs bg-blue-500 rounded-full text-white h-4 w-4">
                  1
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserConversations;
