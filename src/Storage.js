import {NativeModules,Platform} from "react-native";
const isIos = Platform.OS==="ios";

var Storage = {
    save:function(key,value) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.storeSave(key,value).then(data=>{
                    resolve(data);
                },(code,message)=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.storeSave(key,value,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        });
    },
    get:function(key){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.storeGet(key).then(value=>{
                    resolve(value);
                },(code,message)=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.storeGet(key,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
            
        });
    }
}

module.exports = Storage;