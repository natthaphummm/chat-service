import { Schema, model } from "mongoose";

const GroupSchema = new Schema({
    name: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    isPrivate: { type: Boolean, default: false },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
export default model("Group", GroupSchema);
