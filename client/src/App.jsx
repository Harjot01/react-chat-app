import React, { useEffect } from "react";
import Index from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useUserStore } from "./stores/useUserStore";
import Loader from "./components/Loader/Loader";
import { useChatStore } from "./stores/useChatStore";

const App = () => {
  const {
    isLoading,
    setIsLoading,
    setUserProfile,
    isAuthenticated,
    setIsAuthenticated,
  } = useUserStore();

  const { setAllConversations, setIsUserInfoVisible, setShowChats } =
    useChatStore();


  useEffect(() => {
    const fetchDefault = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_CLOUDINARY_SERVER_URL}/user/profile`,
          {
            withCredentials: true,
          }
        );
        setUserProfile(res.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
        setShowChats(false);
        setIsUserInfoVisible(false);
      }
    };

    const getUserConversations = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_CLOUDINARY_SERVER_URL}/conversations`,
          {
            withCredentials: true,
          }
        );
        console.log(res.data);
        setAllConversations(res.data.conversations);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDefault();
    getUserConversations();
  }, [isAuthenticated]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className="flex items-center justify-center text-white h-screen  ">
              <Index />
            </main>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
