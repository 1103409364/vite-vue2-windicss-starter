import { storageType, tokenTableName } from "@/config";

/**
 * @description 获取accessToken
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getAccessToken() {
  if (storageType) {
    if ("localStorage" === storageType) {
      return localStorage.getItem(tokenTableName);
    } else if ("sessionStorage" === storageType) {
      return sessionStorage.getItem(tokenTableName);
    } else {
      return localStorage.getItem(tokenTableName);
    }
  } else {
    return localStorage.getItem(tokenTableName);
  }
}

/**
 * @description 存储accessToken
 * @param accessToken
 * @returns {void|*}
 */
export function setAccessToken(accessToken: string) {
  if (storageType) {
    if ("localStorage" === storageType) {
      return localStorage.setItem(tokenTableName, accessToken);
    } else if ("sessionStorage" === storageType) {
      return sessionStorage.setItem(tokenTableName, accessToken);
    } else {
      return localStorage.setItem(tokenTableName, accessToken);
    }
  } else {
    return localStorage.setItem(tokenTableName, accessToken);
  }
}

/**
 * @description 移除accessToken
 * @returns {void|Promise<void>}
 */
export function removeAccessToken() {
  if (storageType) {
    if ("localStorage" === storageType) {
      return localStorage.removeItem(tokenTableName);
    } else if ("sessionStorage" === storageType) {
      return sessionStorage.clear();
    } else {
      return localStorage.removeItem(tokenTableName);
    }
  } else {
    return localStorage.removeItem(tokenTableName);
  }
}
