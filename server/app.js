import { config } from "dotenv";
import express from "express";
import userRouter from "./routes/UserRoute.js";
import ConversationRouter from "./routes/ConversationRoute.js";
import MessageRouter from "./routes/MessageRoute.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./data/database.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import http from "http";
import setupSocket from "./socket/index.js";

const app = express();
const server = http.createServer(app);

config({
  path: ".env",
});

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// adding routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/conversations", ConversationRouter);
app.use("/api/v1/messages", MessageRouter);

app.get("/", (req, res) => {
  res.send("Hi, welcome to the server");
});

setupSocket(server);

app.use(errorMiddleware);
server.listen(process.env.PORT, () => {
  console.log("Server is running");
});
