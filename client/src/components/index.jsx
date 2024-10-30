import React from "react";
import ChatMessages from "./ChatMessages/ChatMessages";
import UserInfo from "./UserInfo/UserInfo";
import ChatMenu from "./ChatMenu/ChatMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useChatStore } from "../stores/useChatStore";
import { useUserStore } from "../stores/useUserStore";
import { Navigate } from "react-router-dom";
import UpdateUserProfile from "./ChatMenu/UpdateUserProfile";

const Index = () => {
  const { showChats, isUserInfoVisible } = useChatStore();
  const { isAuthenticated, showUpdateProfileMenu } = useUserStore();
  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return (
    <section className="flex h-[95vh] w-[85vw]">
      <section className="bg-[#f0f0f0] flex-none  w-1/4">
        {showUpdateProfileMenu ? <UpdateUserProfile /> : <ChatMenu />}
      </section>
      <AnimatePresence>
        <section className="bg-white text-black flex-auto  w-1/2">
          {showChats ? <ChatMessages /> : "Start a Conversation"}
        </section>
      </AnimatePresence>
      <AnimatePresence>
        {isUserInfoVisible && (
          <motion.section
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ x: 50 }}
            transition={{ ease: "linear", duration: 0.1 }}
            className="bg-[#f0f0f0] flex-auto w-1/4"
          >
            <UserInfo />
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Index;
