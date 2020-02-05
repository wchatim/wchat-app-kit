import { NavigationActions} from 'react-navigation';

var navigation;

/**
 * 初始化
 * @param {navigation}} nav 
 */
const init = (nav) => {
    navigation = nav;
}

/**
 * 跳转
 * @param {*} page 
 * @param {*} params 
 */
const push = (page,params) => {
    navigation.push(page,params);
}

/**
 * 返回到第几个页面
 * @param {*} index 
 */
const pop = (index = 1) => {
    navigation.pop(index);
}

/**
 * 返回到顶部页面
 */
const popToTop = () =>{
    navigation.popToTop();
}

/**
 * 用新的路由替换当前路由
 * @param {*} page 
 * @param {*} params 
 */
const replace = (page,params) => {
    navigation.replace(page, params);
}

/**
 * 重置路由
 * @param {*} page 
 */
const reset = (page) =>{
    navigation.reset([NavigationActions.navigate({routeName:page})],0);
}

/**
 * 关闭当前堆栈
 */
const dismiss = () =>{
    navigation.dismiss()
}

export default {
  init,
  push,
  pop,
  popToTop,
  replace,
  reset,
  dismiss
};
