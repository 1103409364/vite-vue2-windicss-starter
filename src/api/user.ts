import request from "@/utils/request";
import { encryptedData } from "@/utils/encrypt";
import { loginRSA } from "@/config";
interface IUser {
  account: string;
  password: string;
}

export async function login(data: IUser) {
  loginRSA && (data = await encryptedData(data));
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function userInfo() {
  return request({
    url: "/users/info",
    method: "get",
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
