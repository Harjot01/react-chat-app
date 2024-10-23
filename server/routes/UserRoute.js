import express from "express";
import {
  findUser,
  getAllUsers,
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/UserController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", isAuthenticated, getUserProfile);
router.post("/find", isAuthenticated, findUser);
router.get("/all", isAuthenticated, getAllUsers);
router.get("/logout", isAuthenticated, logoutUser);

export default router;
