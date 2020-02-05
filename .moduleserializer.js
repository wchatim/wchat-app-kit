//获得路径分割符号
const path = require('path');
const pathSep = require('path').sep;
const rootDir = path.resolve(__dirname,'../../');
//获取打包配置
const config = require(rootDir+'/package.json');
//需要打包依赖
const dependencies = config.dependencies;
//不过滤，需要打包的
function packageToBundle(path){
    for (let moduleName of Object.keys(dependencies)) {
      if (path.indexOf(pathSep + 'node_modules' + pathSep + moduleName) > 0) {
        return true;
      }
    }
    return false;
}
//过滤
function postProcessModulesFilter(module) {//返回false则过滤不编译
    if(module['path'].indexOf('__prelude__')>=0){
      return false;
    }
    if(module['path'].indexOf(pathSep+'node_modules'+pathSep)>0){
      if(packageToBundle(module['path'])){
        return true;
      }
      if('js'+pathSep+'script'+pathSep+'virtual'==module['output'][0]['type']){
        return true;
      }
      return false;
    }
    return true;
  }

//创建模块
function createModuleIdFactory() {
    //获取命令行执行的目录，__dirname是nodejs提供的变量
    const projectRootPath = rootDir;
    console.info("========== module bundle ==========");
    //过滤路径
    return path => {
        let name = '';
        //检查是否是内置库
        if(path.indexOf('node_modules'+pathSep+'react-native'+pathSep+'Libraries'+pathSep)>0){
            //这里是去除路径中的'node_modules/react-native/Libraries/‘之前（包括）的字符串，可以减少包大小，可有可无
            name = path.substr(path.lastIndexOf(pathSep)+1);
        }else if(path.indexOf(projectRootPath)==0){
            //这里是取相对路径，不这么弄的话就会打出_user_smallnew_works_....这么长的路径，还会把计算机名打进去
            name = path.substr(projectRootPath.length+1);
        }
        //process.stdout.write(name+" ");
        name = name.replace('.js','');//js png字符串没必要打进去
        name = name.replace('.png','');
        let regExp = pathSep=='\\'?new RegExp('\\\\',"gm"):new RegExp(pathSep,"gm");
        name = name.replace(regExp,'_');//把path中的/换成下划线
        return name;
    };
}

module.exports = {
  projectRoot:rootDir,
  serializer: {
    createModuleIdFactory:createModuleIdFactory,
    processModuleFilter:postProcessModulesFilter
  }
};