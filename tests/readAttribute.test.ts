import { readAttribute } from "../src/utils";
import mock from './mock'
const data=mock;
const keys=['layers',0]
test('readAttribute test', () => { 
    const root=readAttribute(data,...keys);
    expect(root).toBe(data['layers'][0])
 })