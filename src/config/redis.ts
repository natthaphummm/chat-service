import Redis from "ioredis";
import { config } from "./env";

const redisClient = new Redis({
    host: config.redisHost,
    port: config.redisPort as number,
});

redisClient.on("connect", () => {
    console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
    console.error("Redis error:", err);
});

export default redisClient;
