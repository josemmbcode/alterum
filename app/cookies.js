import { createCookie } from "@remix-run/node";

export const sessionId = createCookie("sessionId", {
  maxAge: 604_800,
});
