import express from "express";
import {
  createNewConversation,
  getConversationMessages,
  getUserConversations,
} from "../controllers/ConversationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// create a new conversation
router.post("/", isAuthenticated, createNewConversation);

router.get("/", isAuthenticated, getUserConversations);

router.get(
  "/:conversationId/messages",
  isAuthenticated,
  getConversationMessages
);

export default router;
