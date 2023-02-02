import { PathArray } from './types/index'
export function readAttribute(object: any, ...keys: PathArray) {
    return keys.reduce((cur, next) => {
        if (cur && cur[next])
            return cur[next]
        else return null
    }, object)
}
export function setAttribute(object: any, value: any, ...keys: PathArray) {
    return keys.reduce((cur, next) => {
        if (cur && cur[next]) {
            cur[next] = value
            return cur
        }
        else return null
    }, object)
}
export function findNodeByDFS(data: any, value: any, childrenKey: string, ...keys: PathArray) {
    let res;
    data.some((item: { [x: string]: any; }) => {
        const children = item[childrenKey];
        const iav = readAttribute(item, ...keys);
        if (iav == value) {
            res = item;
            return true;
        } else if (children && children.length) {
            res = findNodeByDFS(children, value, childrenKey, ...keys);
            return res;
        } else return false
    });
    return res;
};