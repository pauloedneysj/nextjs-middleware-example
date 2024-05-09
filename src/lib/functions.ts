"use server";

import { cookies } from "next/headers";

export async function storeToken(token: string) {
  cookies().set({
    name: "accessToken",
    value: token,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
}
