import { tokenKey } from "../config";
import eatableClient from "./eatable-client";

export async function createUser(userData) {
  const { token, ...user } = await eatableClient("/users", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await eatableClient("/profile");

  return user;
}
