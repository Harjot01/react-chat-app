// useSocketStore.js
import { io } from "socket.io-client";
import { create } from "zustand";
import { useChatStore } from "./useChatStore";

export const useSocketStore = create((set) => {
  const { setChatMessages } = useChatStore.getState();

  return {
    socket: null,

    initializeSocket: () => {
      const socket = io("http://localhost:5500");
      set({ socket });
    },

    sendMessage: (messageData) => {
      const { socket } = useSocketStore.getState();
      if (socket) {
        socket.emit("send_message", messageData);
      }
    },
  };
});
