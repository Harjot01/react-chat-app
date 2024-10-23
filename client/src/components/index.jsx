import React, { useState } from "react";
import ChatMessages from "./ChatMessages/ChatMessages";
import UserInfo from "./UserInfo/UserInfo";
import ChatMenu from "./ChatMenu/ChatMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useChatStore } from "../stores/useChatStore";
import { useUserStore } from "../stores/useUserStore";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { isUserInfoVisible } = useChatStore();
  const { isAuthenticated } = useUserStore();

  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return (
    <section className="flex h-[95vh] w-[85vw]">
      <section className="bg-[#f0f0f0] flex-none  w-1/4">
        <ChatMenu />
      </section>
      <AnimatePresence>
        <section className="bg-white flex-auto  w-1/2">
          <ChatMessages />
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
