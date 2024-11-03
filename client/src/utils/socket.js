import { io } from "socket.io-client";

const socket = io("https://react-chat-app-backend-eta.vercel.app/");

export default socket;
