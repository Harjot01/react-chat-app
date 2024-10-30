import { create } from "zustand";

export const useChatStore = create((set) => ({
  isUserInfoVisible: false,
  setIsUserInfoVisible: (status) => set({ isUserInfoVisible: status }),

  chatMessages: [],
  setChatMessages: (newMessage) => set((state) => ({
    chatMessages: [...state.chatMessages, newMessage]
  })),

  conversationId: null,
  setConversationId: (id) => set({ conversationId: id }),

  showChats: false,
  setShowChats: (status) => set({ showChats: status }),

  allConversations: null,
  setAllConversations: (conversations) =>
    set({ allConversations: conversations }),
}));
