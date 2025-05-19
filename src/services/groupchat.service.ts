import Group from "../models/group.model";
import Message from "../models/message.model";

export class GroupChatService {
    static async createGroup(userId: string, name: string, isPrivate: boolean) {
        return await Group.create({
            name,
            owner: userId,
            isPrivate,
            members: [userId],
        });
    }
    static async joinGroup(userId: string, groupId: string) {
        return await Group.findByIdAndUpdate(groupId, {
            $addToSet: { members: userId },
        });
    }
    static async leaveGroup(userId: string, groupId: string) {
        return await Group.findByIdAndUpdate(groupId, {
            $pull: { members: userId },
        });
    }
    static async deleteGroup(userId: string, groupId: string) {
        const group = await Group.findById(groupId);
        if (group && group.owner && group.owner.toString() === userId)
            return await Group.findByIdAndDelete(groupId);
    }

    static async getMessages(groupId: string) {
        return await Message.find({ groupId }).sort({ createdAt: 1 });
    }
}
