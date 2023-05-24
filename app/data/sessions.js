import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import crypto from "crypto";
import { prisma } from "./database.server";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const { commitSession } = sessionStorage;
export { commitSession };

const USER_SESSION_KEY = "userId";

export async function createUserSession(remember) {
  const session = await sessionStorage.getSession();
  const userId = `guest-${crypto.randomUUID()}`
  session.set(USER_SESSION_KEY, userId);

   redirect('/', {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : undefined,
      }),
    },
  });
}

export async function getUserFromSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const userId = session.get(USER_SESSION_KEY);
  
  if (!userId){
    return null
  }
  return userId;
}

