import {NativeModules,Platform} from "react-native";
const isIos = Platform.OS==="ios";
var WChat = {

    /**
     * 提示
     * @param {*} msg 消息
     * @param {秒} duration 时间
     */
    showToast:function(msg,duration=2000){
        NativeModules.WChatNative.showToast(msg,duration);
    },

    /**
     * 加载状态
     * @param {true/false} canBack 可以返回关闭
     */
    showLoading:function(canBack=true){
        NativeModules.WChatNative.showLoading(canBack);
    },

    /**
     * 关闭加载
     * cancelLoading
     */
    cancelLoading:function(){
        NativeModules.WChatNative.cancelLoading();
    },

    /**
     * 确认框
     * @param {*} title 标题
     * @param {*} content 内容
     * @param {*} left 左边按钮标题
     * @param {*} right 右边按钮标题
     */
    showAlert:function(title,content,left,right){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.WChatNative.alert(title,content,left,right).then(result=>{
                        resolve(result);
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.WChatNative.alert(title,content,left,right,(r)=>{
                        resolve(r);
                    });
                }
                
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        }); 
    },

    /**
     * 导航栏高度
     */
    getNavgationHeight:function(){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.WChatNative.getNavgationHeight().then(height=>{
                        resolve(parseInt(height));
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.WChatNative.getNavgationHeight((h)=>{
                        resolve(parseInt(h));
                    },(code,msg)=>{
                        reject({code,msg});
                    });
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        });
    },

    /**
     * os
     */
    getOs:function(){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.WChatNative.getSystemInfo().then(data=>{
                        resolve(JSON.parse(data));
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.WChatNative.getSystemInfo((data)=>{
                        resolve(JSON.parse(data));
                    },(code,msg)=>{
                        reject({code,msg});
                    });
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        }); 
    },

    /**
     * 状态栏高度
     */
    getStatusBarHeight:function(){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.WChatNative.getStatusBarHeight().then(height=>{
                        resolve(parseInt(height));
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.WChatNative.getStatusBarHeight((h)=>{
                        resolve(parseInt(h));
                    },(code,msg)=>{
                        reject({code,msg});
                    });
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        }); 
    },

    /**
     * 设置状态栏背景
     * @param {#000000} color 
     */
    setStatusBgColor:function(color){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.WChatNative.setStatusBgColor(color).then(data=>{
                        resolve(data);
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.WChatNative.setStatusBgColor(color);
                    resolve("");
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        });
    },

    /**
     * 检查应用是否安装
     * @param {im.wchat} pkg 
     */
    checkAppInstall:function(pkg){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.WChatNative.checkAppInstall(pkg).then(isInstall=>{
                        resolve(isInstall);
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.WChatNative.checkAppInstall(pkg,(r)=>{
                        resolve(r);
                    },(code,msg)=>{
                        reject({code,msg});
                    });
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        }); 
    },

    /**
     * 授权登录
     */
    requestLogin:function() {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestLogin().then(data=>{
                    resolve(JSON.parse(data));
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestLogin((data)=>{
                    resolve(JSON.parse(data));
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 授权地理位置
     */
    requestLocation:function() {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestLocation().then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestLocation((data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 获取图片
     */
    requestPhoto:function(selectNum,showCamera,enableCrop,cropWH) {
        return new Promise(function(resolve,reject) {

            if(isIos){
                NativeModules.WChatNative.requestPhoto(selectNum,showCamera,enableCrop,cropWH).then(data=>{
                    resolve(JSON.parse(data));
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestPhoto(selectNum,showCamera,enableCrop,cropWH,(data)=>{
                    resolve(JSON.parse(data));
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
           
        }); 
    },

    /**
     * 获取链信息
     */
    requestChains:function() {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestChains().then(data=>{
                    resolve(JSON.parse(data));
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestChains((data)=>{
                    resolve(JSON.parse(data));
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
            
        }); 
    },

     /**
     * 获取钱包信息
     */
    requestWallet:function(cid) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestWallet(cid+"").then(data=>{
                    resolve(JSON.parse(data));  
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestWallet(cid+"",(data)=>{
                    resolve(JSON.parse(data));  
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
           
        }); 
    },

     /**
     * 开始聊天
     */
    requestChat:function(type,targetid) {
        return new Promise(function(resolve,reject) {

            if(isIos){
                NativeModules.WChatNative.requestChat(type,targetid).then(data=>{
                    resolve(data);  
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestChat(type,targetid,(data)=>{
                    resolve(data);  
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 分享
     * data:空
     * error:{code,message}
     */
    share:function(title,subtitle,img,link) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.share(title,subtitle,img,link).then(data=>{
                    resolve(data);   
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.share(title,subtitle,img,link,(data)=>{
                    resolve(data);   
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
           
        }); 
    },

    /**
     * 分享图片
     * data:空
     * error:{code,message}
     */
    shareImg:function(img) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.shareImg(img).then((data)=>{
                    resolve(data);     
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.shareImg(img,(data)=>{
                    resolve(data);  
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 请求绑定邀请码
     * data 返回邀请码
     * error:{code,message}
     */
    requestBindCode:function(){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestBindCode().then(data=>{
                    resolve(data);  
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestBindCode((data)=>{
                    resolve(data);  
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 获取intent参数
     * data 返回的url
     * error:{code,message}
     */
    requestIntentParams:function() {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestIntentParams().then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestIntentParams((data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
            
        }); 
    },
    
    /**
     * 获取充值页面
     * data 返回空
     * error:{code,message}
     */
    requestCharge:function(cid) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestCharge(cid+"").then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestCharge(cid+"",(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 获取余额权限
     * data 返回空
     * error:{code,message}
     */
    requestBalance:function(cid) {
        return new Promise(function(resolve,reject) {

            if(isIos){
                NativeModules.WChatNative.requestBalance(cid+"").then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestBalance(cid+"",(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 请求支付
     * data 返回空
     * error:{code,message}
     */
    requestPayment:function(timestamp,nonce,orderid,paySign) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestPayment(timestamp,nonce,orderid,paySign).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestPayment(timestamp,nonce,orderid,paySign,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 请求网页
     * data 返回空
     * error:{code,message}
     */
    requestWeb:function(url,settings) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.requestWeb(url,settings).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.requestWeb(url,settings,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 上传
     * data urls
     * error:{code,message}
     */
    upload:function(files) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.upload(files).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.upload(files,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 日志
     * @param {*} tag 
     * @param {*} message 
     */
    log:function(tag,message){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.log(tag,message).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.log(tag,message,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 显示
     */
    openTopBar:function(){
        NativeModules.WChatNative.openTopBar();
    },
    /**
     * 隐藏
     */
    closeTopBar:function(){
        NativeModules.WChatNative.closeTopBar();
    },
    /**
     * 加入聊天室
     * @param {*} tag 
     * @param {*} message 
     */
    joinChatRoom:function(roomid){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.joinChatRoom(roomid).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.joinChatRoom(roomid,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 退出聊天室
     * @param {*} tag 
     * @param {*} message 
     */
    exitChatRoom:function(roomid){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.exitChatRoom(roomid).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.exitChatRoom(roomid,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 发送聊天消息
     * @param {*} tag 
     * @param {*} message 
     */
    sendChatRoomMsg:function(roomid,text,ext){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.WChatNative.sendChatRoomMsg(roomid,text,ext).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.WChatNative.sendChatRoomMsg(roomid,text,ext,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
}

module.exports = WChat;