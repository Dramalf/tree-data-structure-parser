interface TreeParserConfig{
    IdKey:string,
    childrenKey:string
}
type PathArray = (string|number)[]
 export class TreeParser{
    originData?:any
    IdKey?:string;
    childrenKey?:string;
    rootPath?:any
    root?:any
    constructor(config:TreeParserConfig){
        this.childrenKey=config?.childrenKey;
        this.IdKey=config?.IdKey;
    }
    parse=(treeData:any)=>{
        this.originData=treeData;
        return this
    }
    setRootPath=(rootPathArray:PathArray)=>{
        this.rootPath=rootPath;
        return this
    }
    findNodeByAttribute=(attribute:string|PathArray,targetId:any)=>{

    }

}