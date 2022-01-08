import request from "@/utils/request";
import { encryptedData } from "@/utils/encrypt";
import config from "@/config";
const { loginRSA, tokenName } = config;

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

export function getUserInfo(accessToken: string) {
  return request({
    url: "/userInfo",
    method: "post",
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
