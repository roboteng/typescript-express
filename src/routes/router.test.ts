import supertest, { SuperAgentTest } from "supertest";

import app from "./router";

describe("Baic test", () => {
  test("Responds on route", async () => {
    const agent = supertest.agent(app);

    const res = await agent.get("/ping");

    expect(res.text).toBe("pong");
  });
});
