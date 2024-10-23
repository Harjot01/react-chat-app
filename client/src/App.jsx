import React, { useEffect } from "react";
import Index from "./components";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useUserStore } from "./stores/useUserStore";
import Loader from "./components/Loader/Loader";

const App = () => {
  const {
    isLoading,
    setIsLoading,
    setUserProfile,
    isAuthenticated,
    setIsAuthenticated,
  } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          "http://localhost:5000/api/v1/user/profile",
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
      }
    };

    fetchUser();
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
            <main  className="flex items-center justify-center text-white h-screen  ">
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
