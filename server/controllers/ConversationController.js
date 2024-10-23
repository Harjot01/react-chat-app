import { ErrorHandler } from "../middlewares/error.js";
import { Conversation } from "../models/ConversationModel.js";
import { Message } from "../models/MessageModel.js";
import { User } from "../models/UserModel.js";

export const createNewConversation = async (req, res, next) => {
  try {
    const { participantUsername } = req.body;
    const currentuserId = req.user._id;

    const participant = await User.findOne({ username: participantUsername });

    if (!participant) {
      return next(ErrorHandler("User not found", 404));
    }

    const participantId = participant._id;

    const isExistingConversation = await Conversation.findOne({
      participants: { $all: [currentuserId, participantId] },
    });

    if (isExistingConversation) {
      return next(new ErrorHandler("Conversation Already Exists", 400));
    }

    const conversation = await Conversation.create({
      participants: [currentuserId, participantId],
    });

    res.status(201).json({
      success: true,
      conversation,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find({
      participants: req.user._id,
    }).populate("participants", "username");

    res.status(200).json({
      success: true,
      conversations,
    });
  } catch (error) {
    next(error);
  }
};

export const getConversationMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const messages = await Message.find({ conversationId })
      .sort({
        timestamp: 1,
      })
      .populate("sender", "username");

    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    next(error);
  }
};
