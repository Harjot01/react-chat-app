import express from "express";
import {
  createNewConversation,
  decrementUnreadMessages,
  getConversationMessages,
  getUserConversations,
  incrementUnreadMessages,
} from "../controllers/ConversationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// create a new conversation
router.post("/", isAuthenticated, createNewConversation);
router.get("/", isAuthenticated, getUserConversations);
router.post(
  "/:conversationId/increment",
  isAuthenticated,
  incrementUnreadMessages
);
router.post(
  "/:conversationId/decrement",
  isAuthenticated,
  decrementUnreadMessages
);

router.get(
  "/:conversationId/messages",
  isAuthenticated,
  getConversationMessages
);

export default router;
