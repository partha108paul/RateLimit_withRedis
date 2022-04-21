const express = require("express");
const path = require("path");
import { Request, Response } from "express";
// import * as limiter2 from "./src/limiter"
const limiter = require("./src/limiter");
// const requestIp = require("request-ip");
// const redisClient = redis.createClient();

const app = express();
const { port } = require("./config").app;

// app.use(requestIp.mw());
console.log("Calling..........................");
app.use(limiter);

app.get("/api/ping", (req: Request, res: Response) => {
  // console.log(requestIp.getClientIp(req));
  console.log(req.socket.remoteAddress);
  return res.send("PONG");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
