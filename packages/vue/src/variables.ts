/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
// tslint:disable
import { TabContainer } from "./index";

// @ts-ignore
export function indexTemplateHtml(this: TabContainer) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-container"},[_c('ul',{staticClass:"tab-title"},_vm._l((_vm.data),function(item,i){return _c('li',{key:i,class:_vm.getTabClass(item, i),attrs:{"role":"presentation"},on:{"click":function($event){_vm.clickTab(i)},"mouseenter":function($event){_vm.mouseenter(item)},"mouseleave":function($event){_vm.mouseleave(item)}}},[(item.titleComponent)?_c(item.titleComponent,{tag:"component",attrs:{"data":item.titleData}}):_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v(_vm._s(item.title))]),(item.canClose && _vm.hoveringItem === item)?_c('span',{staticClass:"tab-close",on:{"click":function($event){_vm.close($event, i)}}},[_vm._v("×")]):_vm._e()],1)})),_c('div',{staticClass:"tab-content"},_vm._l((_vm.data),function(item,i){return _c('div',{key:i,class:item.isActive ? 'active' : 'inactive',attrs:{"role":"tabpanel"}},[_c(item.component,{tag:"component",attrs:{"data":item.data}})],1)}))])}
// tslint:enable
