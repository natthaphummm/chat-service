import { RateLimiterRedis } from "rate-limiter-flexible";
import redisClient from "../config/redis";

const MESSAGE_LIMIT = 5;
const WINDOW_DURATION = 3;
const BLOCK_DURATION = 10;

const rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "message_rate_limiter",
    points: MESSAGE_LIMIT,
    duration: WINDOW_DURATION,
    blockDuration: BLOCK_DURATION,
});

export default rateLimiter;
