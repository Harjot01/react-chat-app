import { Conversation } from "../models/ConversationModel.js";
import { Message } from "../models/MessageModel.js";
import { ErrorHandler } from "../middlewares/error.js";
export const sendMessage = async (req, res, next) => {
  try {
    const { conversationId } = req.params;
    const { chatMessage } = req.body;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return next(new ErrorHandler("Conversation not found", 404));
    }

    const message = await Message.create({
      conversationId,
      sender: req.user._id,
      chatMessage,
    });

    conversation.lastMessage = message._id;
    await conversation.save();

    res.status(201).json({
      success: true,
      message,
    });
  } catch (error) {
    next(error);
  }
};
