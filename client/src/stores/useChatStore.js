import { create } from "zustand";

export const useChatStore = create((set) => ({
  isUserInfoVisible: false,
  setUserInfoVisible: () =>
    set((state) => ({ isUserInfoVisible: !state.isUserInfoVisible })),
}));
