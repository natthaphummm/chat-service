// ✅ server.ts
import { createServer } from "http";
import { Server } from "socket.io";
import { config } from "./config/env";
import app from "./app";
import { connectDB } from "./config/db";
import { registerSocketHandlers } from "./services/socket.service";

const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

connectDB();
registerSocketHandlers(io);

server.listen(config.port, () =>
    console.log(`🚀 Server running on port ${config.port}`)
);
