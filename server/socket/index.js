import { Server } from "socket.io";

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("joinConversation", (conversationId) => {
      socket.join(conversationId);
      console.log(`The user ${socket.id} has joined`);
    });

    socket.on("sendMessage", (newMessage) => {
      const { conversationId } = newMessage;
      io.to(conversationId).emit("receiveMessage", newMessage);

      io.to(conversationId).emit("lastMessage", newMessage);

      socket.broadcast
        .to(conversationId)
        .emit("updateUnreadMessages", newMessage);
    });
  });

  return io;
};

export default setupSocket;
