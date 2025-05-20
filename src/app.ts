import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

import authRoutes from "./routes/auth.route";
import groupRoutes from "./routes/groupchat.route";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
    res.send("OK");
});

app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);

export default app;
