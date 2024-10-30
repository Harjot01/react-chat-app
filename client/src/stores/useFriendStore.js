import { create } from "zustand";

export const useFriendStore = create((set) => ({
  
    friendProfile: {},
    setFriendProfile: (friendObj) => set({ friendProfile: friendObj }),
    
  }));
  