import { Router } from "express";
import { GroupChatController } from "../controllers/groupchat.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
const router = Router();

router.use(authMiddleware);
router.post("/", GroupChatController.createGroup);
router.post("/:id/join", GroupChatController.join);
router.post("/:id/leave", GroupChatController.leave);
router.delete("/:id", GroupChatController.delete);
router.get("/:id/messages", GroupChatController.getMessages);

export default router;
