import express from "express";
import { sendMessage } from "../controllers/MessageController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/:conversationId", isAuthenticated, sendMessage);

export default router;
