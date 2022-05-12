import express from "express";

const app = express();

app.get("/ping", (_, res) => {
  res.send("pong");
});

export default app;
