import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route";
import groupRoutes from "./routes/groupchat.route";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);

export default app;
