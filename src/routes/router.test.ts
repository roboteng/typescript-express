import supertest from "supertest";

import app from "./router";

describe("Basic test", () => {
  test("Responds on route", async () => {
    const agent = supertest.agent(app);

    const res = await agent.get("/ping");

    expect(res.text).toBe("pong");
  });
});
