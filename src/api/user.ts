import request from "@/utils/request";
import { encryptedData } from "@/utils/encrypt";
import { loginRSA, tokenName } from "@/config";

export async function login(data: User) {
  loginRSA && (data = await encryptedData(data));
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function userInfo(accessToken: string) {
  return request({
    url: "/users/info",
    method: "get",
    data: {
      [tokenName]: accessToken,
    },
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}

export function register() {
  return request({
    url: "/register",
    method: "post",
  });
}

export function getPublicKey() {
  return request({
    url: "/publicKey",
    method: "post",
  });
}
