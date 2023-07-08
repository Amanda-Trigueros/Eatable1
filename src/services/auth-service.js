import { tokenKey } from "../config";
import eatableClient from "./eatable-client";

export async function login(credentials) {
  const { token, ...user } = await eatableClient("/login", {
    body: credentials,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await eatableClient("/logout", { method: "DELETE" });
}
