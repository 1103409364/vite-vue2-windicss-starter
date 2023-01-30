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

interface TreeNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  children?: TreeNode[];
}

/**
 * 父子节点转树形
 * @param arr
 * @param id // id key 默认'id'
 * @param pId
 * @param topId  // 最顶级id 可选
 */
export function dataToTree(
  data: TreeNode[],
  idKey = "id",
  pIdKey = "parentId",
  topId: string
) {
  const temp: { [key: string]: TreeNode } = {};
  const result: TreeNode[] = [];
  data.forEach((item) => (temp[item[idKey]] = item));
  data.forEach((item) => {
    const parent = temp[item[pIdKey]];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else if (item[pIdKey] === topId || item[pIdKey] === undefined) {
      result.push(item);
    }
  });
  return result;
}
/**
 * 找节点
 * @param tree
 * @param id
 * @param idKey
 */
export function findNode(
  tree: TreeNode[],
  id: string,
  idKey: string
): TreeNode | undefined {
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node[idKey] === id) return node;
    if (node.children && node.children.length) {
      const res = findNode(node.children, id, idKey);
      if (res) return res;
    }
  }
}
