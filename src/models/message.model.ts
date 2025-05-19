import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
    sender: { type: String },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
export default model("Message", MessageSchema);
