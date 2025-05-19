import jwt from "jsonwebtoken";
import { config } from "../config/env";

export const generateToken = (id: string) =>
    jwt.sign(
        { id },
        config.jwtSecret as jwt.Secret,
        {
            expiresIn: config.jwtExpiresIn,
        } as jwt.SignOptions
    );
