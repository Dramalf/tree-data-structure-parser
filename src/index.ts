import {TreeParserConfig} from './interfaces/index'
import {PathArray} from './types/index'
import { readAttribute ,setAttribute,findNodeByDFS} from './utils';
export default class TreeParser{
    originData?:any
    IdKey?:string;
    childrenKey:string;
    rootPath?:any
    private root?:any
    constructor(config:TreeParserConfig={childrenKey:'children'}){
        this.childrenKey=config.childrenKey;
        this.IdKey=config?.IdKey;
    }
    parse=(treeData:any)=>{
        this.originData=treeData;
        this.root=treeData
        return this
    }
    switchRootChildrenKey=(originKey:string)=>{
        this.root[this.childrenKey]=this.root[originKey];
        delete this.root[originKey];
        return this
    }
    setRootPath=(...rootPathArray:PathArray)=>{
        this.rootPath=rootPathArray;
        this.root=readAttribute(this.originData,...rootPathArray)
        return this
    }
    findNodeByAttribute=(targetValue:any,...attribute:PathArray)=>{
        const node=findNodeByDFS(this.root[this.childrenKey],targetValue,this.childrenKey,...attribute);
        return node?new TreeParser({childrenKey:this.childrenKey}).parse(node):undefined
    }
    setNodeAttribute=(targetValue:any,...attribute:PathArray)=>{
        setAttribute(this.root,targetValue,...attribute);
        return this
    }
    getNodeAttribute=(...attribute:PathArray)=>{
        return readAttribute(this.root,...attribute)
    }
    getRootValue=()=>{
        return this.root
    }
    setChildrenKey=(childrenKey:string)=>{
        this.childrenKey=childrenKey
    }
}
