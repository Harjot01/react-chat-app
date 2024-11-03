// useSocketStore.js
import { io } from "socket.io-client";
import { create } from "zustand";
import { useChatStore } from "./useChatStore";
import { useUserStore } from "./useUserStore";

export const useSocketStore = create((set, get) => {
  const { setChatMessages, conversationId } = useChatStore.getState();
  const { userProfile } = useUserStore.getState();

  return {
    socket: null,

    initializeSocket: () => {
      const socket = io("http://localhost:4000");

      socket.on("connect", () => {
        console.log("Connected to socket server");
      });

      set({ socket });
    },

    receiveMessage: () => {
      const socket = get().socket;
      socket.on("receiveMessage", (newMessage) => {
        console.log(newMessage);
        setChatMessages(newMessage);

        console.log(
          `The sender of the message ${newMessage.chatMessage} is ${newMessage.sender.username} in room: ${newMessage.conversationId}`
        );
      });
    },

    joinConversation: (conversationId) => {
      const socket = get().socket;
      socket.emit("joinConversation", conversationId);
    },

    sendMessage: (message) => {
      const newMessage = {
        _id: Date.now(),
        chatMessage: message,
        sender: { username: userProfile.username },
        timestamp: new Date(),
        conversationId,
      };

      const socket = get().socket;

      socket.emit("sendMessage", newMessage);
    },

    disconnect: () =>{
      const socket = get().socket;
      socket.off("receiveMessage");
    }
  };
});
