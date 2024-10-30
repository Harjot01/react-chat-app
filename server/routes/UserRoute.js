import express from "express";
import {
  findUser,
  getAllUsers,
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/UserController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();



router.post("/register", upload.single('profileImg'), registerUser);
router.post("/login", loginUser);
router.get("/profile", isAuthenticated, getUserProfile);
router.post("/update/:field", isAuthenticated, updateUserProfile);
router.post("/find", isAuthenticated, findUser);
router.get("/all", isAuthenticated, getAllUsers);
router.get("/logout", isAuthenticated, logoutUser);

export default router;
 