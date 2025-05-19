import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static async register(req: Request, res: Response) {
        const { username, password } = req.body;
        const user = await AuthService.register(username, password);
        res.status(201).json(user);
    }

    static async login(req: Request, res: Response) {
        const { username, password } = req.body;
        const token = await AuthService.login(username, password);
        if (!token) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        res.json({ token });
    }
}
