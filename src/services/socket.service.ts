import { Server } from "socket.io";
import Message from "../models/message.model";
import rateLimiter from "../utils/socketRateLimiter";

export const registerSocketHandlers = (io: Server) => {
    io.on("connection", (socket) => {
        socket.on("join", (groupId) => {
            socket.join(groupId);
        });

        socket.on("message", async ({ groupId, sender, content }) => {
            if (await rateLimiter.consume(socket.id)) {
                socket.emit("rateLimitExceeded");
                return;
            }
            const message = await Message.create({ groupId, sender, content });
            io.to(groupId).emit("message", message);
        });

        socket.on("leave", (groupId) => {
            socket.leave(groupId);
        });
    });
};
