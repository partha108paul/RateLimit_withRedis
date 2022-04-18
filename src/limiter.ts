const redis = require("redis");
const RateLimit = require("express-rate-limit");
const RedisStore = require("rate-limit-redis");
import { Request, Response } from "express";
const requestIp = require("request-ip");

const { endpointUri, password } = require("../config").redis;
// const redisClient = redis.createClient(`redis://${endpointUri}`, { password });

const redisClient = redis.createClient();

async function limiterCall() {
  const limiter = RateLimit({
    // Rate limiter configuration
    max: 10, //10 req
    windowMs: 1 * 60 * 1000, //5 min in ms
    // standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    // legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    headers: true,
    keyGenerator: (req: Request, res: Response) => {
      return requestIp.getClientIp(req); // Client IP address from requestIp.mw(), as opposed to req.ip
    },

    // Redis store configuration
    store: new RedisStore({
      client: redisClient,
      expiry: 1,
      sendCommand: (...args: string[]) => redisClient.sendCommand(args),
    }),
  });
  module.exports = limiter;
}

redisClient
  .connect()
  .then(limiterCall())
  .catch((e: Error) => console.log(e));
