import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

export class AuthService {
    static async register(username: string, password: string) {
        const hashed = await bcrypt.hash(password, 10);
        return await User.create({ username, password: hashed });
    }
    static async login(username: string, password: string) {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password)))
            return null;
        return generateToken(user._id.toString());
    }
}
