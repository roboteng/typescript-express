import express from "express";

const app = express();

app.get("/ping", ping);

function ping(_: any, res: express.Response<string>) {
  console.log("Sending ping");
  res.send("pong");
}

export default app;
