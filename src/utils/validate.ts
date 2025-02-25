/**

 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**

 * @description 校验密码是否小于6位
 * @param str
 * @returns {boolean}
 */
export function isPassword(str: string) {
  return str.length >= 6;
}

/**

 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber(value: string) {
  const reg = /^[0-9]*$/;
  return reg.test(value);
}

/**
 * @description 判断是否是名称
 * @param value
 * @returns {boolean}
 */
export function isName(value: string) {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
  return reg.test(value);
}

/**
 * @description 判断是否为IP
 * @param ip
 * @returns {boolean}
 */
export function isIP(ip: string) {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return reg.test(ip);
}

/**
 * @description 判断是否是传统网站
 * @param url
 * @returns {boolean}
 */
export function isUrl(url: string) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * @description 判断是否是小写字母
 * @param str
 * @returns {boolean}
 */
export function isLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * @description 判断是否是大写字母
 * @param str
 * @returns {boolean}
 */
export function isUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**

 * @description 判断是否是大写字母开头
 * @param str
 * @returns {boolean}
 */
export function isAlphabets(str: string) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**

 * @description 判断是否是字符串
 * @param str
 * @returns {boolean}
 */
export function isString(str: unknown) {
  return typeof str === "string" || str instanceof String;
}

/**
 * @description 判断是否是数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
export function isArray(arg: unknown) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}

/**
 * @description 判断是否是端口号
 * @param str
 * @returns {boolean}
 */
export function isPort(str: string) {
  const reg = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
  return reg.test(str);
}

/**
 * @description 判断是否是手机号
 * @param str
 * @returns {boolean}
 */
export function isPhone(str: string) {
  const reg = /^1\d{10}$/;
  return reg.test(str);
}

/**
 * @description 判断是否是身份证号(第二代)
 * @param str
 * @returns {boolean}
 */
export function isIdCard(str: string) {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(str);
}

/**

 * @description 判断是否是邮箱
 * @param str
 * @returns {boolean}
 */
export function isEmail(str: string) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(str);
}

/**

 * @description 判断是否中文
 * @param str
 * @returns {boolean}
 */
export function isChina(str: string) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return reg.test(str);
}

/**

 * @description 判断是否为空
 * @param str
 * @returns {boolean}
 */
export function isBlank(str: string) {
  return (
    str == null ||
    false ||
    str === "" ||
    str.trim() === "" ||
    str.toLocaleLowerCase().trim() === "null"
  );
}

/**

 * @description 判断是否为固话
 * @param str
 * @returns {boolean}
 */
export function isTel(str: string): boolean {
  const reg = /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;
  return reg.test(str);
}

/**

 * @description 判断是否为数字且最多两位小数
 * @param str
 * @returns {boolean}
 */
export function isNum(str: string) {
  const reg = /^\d+(\.\d{1,2})?$/;
  return reg.test(str);
}
