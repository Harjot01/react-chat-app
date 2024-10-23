import { create } from "zustand";

export const useUserStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (authStatus) => set({ isAuthenticated: authStatus }),

  userProfile: {},
  setUserProfile: (userObj) => set({ userProfile: userObj }),

  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
