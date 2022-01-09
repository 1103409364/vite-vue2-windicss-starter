import { title } from "@/config";

/**
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle}-${title}`;
  }
  return `${title}`;
}
