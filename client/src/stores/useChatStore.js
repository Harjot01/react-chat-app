import { create } from "zustand";

export const useChatStore = create((set) => ({
  isUserInfoVisible: false,
  setIsUserInfoVisible: (status) => set({ isUserInfoVisible: status }),

  chatMessages: [],
  setChatMessages: (messages) =>
    set((state) => ({
      chatMessages: Array.isArray(messages)
        ? messages
        : [...state.chatMessages, messages],
    })),

  conversationId: null,
  setConversationId: (id) => set({ conversationId: id }),

  showChats: false,
  setShowChats: (status) => set({ showChats: status }),

  allConversations: [],
  setAllConversations: (conversations) =>
    set({ allConversations: conversations }),

  lastMessages: {},
  setLastMessages: (lastMessages) => set({ lastMessages }),

  unreadMessages: {},
  setUnreadMessages: (unreadMessages) => set({ unreadMessages }),
}));
