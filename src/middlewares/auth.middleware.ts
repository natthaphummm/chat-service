import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "../config/env";

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.sendStatus(401);
        return;
    }
    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.userId = (decoded as any).id;
        next();
    } catch {
        res.sendStatus(403);
    }
};
