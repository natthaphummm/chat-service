import "dotenv/config";

const mode = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;
const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/chat-app";
const jwtSecret = process.env.JWT_SECRET || "secret";
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "7d";

const redisHost = process.env.REDIS_HOST || "localhost";
const redisPort = process.env.REDIS_PORT || 6379;

export const config = {
    mode,
    port,
    dbUrl,
    jwtSecret,
    jwtExpiresIn,
    redisHost,
    redisPort,
};
