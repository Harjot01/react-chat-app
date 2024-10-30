import { Server } from "socket.io";

const userSockets = {};
const conversations = {};

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  // io.on("connection", (socket) => {
  //   console.log("User connected:", socket.id);

  //   socket.on("registerUser", ({ userId, conversationId }) => {
  //     userSockets[userId] = socket.id; // Update mapping

  //     // If the conversation ID doesn't exist, initialize it
  //     if (!conversations[conversationId]) {
  //       conversations[conversationId] = new Set();
  //     }
  //     conversations[conversationId].add(userId);
  //     console.log(
  //       `User ${userId} registered with socket ID ${socket.id} for conversation ${conversationId}`
  //     );
  //   });

  //   socket.on("sendMessage", ({ conversationId, newMessage }) => {
  //     const participants = Array?.from(conversations[conversationId]);
  //     participants?.forEach((participantId) => {
  //       const participantSocketId = userSockets[participantId]; // Get socket ID for each participant
  //       if (participantSocketId) {
  //         io.to(participantSocketId).emit("receiveMessage", {
  //           conversationId,
  //           newMessage,
  //         });
  //       }
  //     });
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("User disconnected: ", socket.id);
  //   });
  // });

  io.on("connection", (socket) => {
    socket.on("joinConversation", (conversationId) => {
      socket.join(conversationId);
    });

    socket.on("sendMessage", ({ conversationId, message, sender }) => {
      io.to(conversationId).emit("receiveMessage", { message, sender });
    });
  });

  return io;
};

export default setupSocket;
