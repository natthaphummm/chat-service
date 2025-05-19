import { Request, Response } from "express";
import { GroupChatService } from "../services/groupchat.service";

export class GroupChatController {
    static async createGroup(req: any, res: Response) {
        const group = await GroupChatService.createGroup(
            req.userId,
            req.body.name,
            req.body.isPrivate
        );
        res.status(201).json(group);
    }
    static async join(req: any, res: Response) {
        await GroupChatService.joinGroup(req.userId, req.params.id);
        res.sendStatus(200);
    }
    static async leave(req: any, res: Response) {
        await GroupChatService.leaveGroup(req.userId, req.params.id);
        res.sendStatus(200);
    }
    static async delete(req: any, res: Response) {
        await GroupChatService.deleteGroup(req.userId, req.params.id);
        res.sendStatus(200);
    }
    static async getMessages(req: Request, res: Response) {
        const messages = await GroupChatService.getMessages(req.params.id);
        res.json(messages);
    }
}
