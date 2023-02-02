import TreeParser from '../src/index'
import mock from './mock'
type Node={materialId:string}
const data=JSON.parse(JSON.stringify(mock));
const controller=new TreeParser({
    childrenKey:'children'
}).parse(data).setRootPath('layers',0).switchRootChildrenKey('elements')
test('find node test',()=>{
    const node=controller.findNodeByAttribute('搭配3','materialId')
    expect((node as unknown as Node).materialId).toBe('搭配3')

})


test('find',()=>{
    const node=controller.findNodeByAttribute('附属素材','materialId');
    const nc=node?.findNodeByAttribute('搭配2','materialId');
    expect(nc?.getRootValue().materialId).toBe('搭配2')

})

test('update',()=>{
    const node=controller.findNodeByAttribute('附属素材','materialId');
    const nc=node?.findNodeByAttribute('搭配2','materialId');
    nc?.setNodeAttribute('image','type');
    console.log(controller.getRootValue())
    expect(controller.findNodeByAttribute('搭配2','materialId')?.getNodeAttribute('type')).toBe('image')

})