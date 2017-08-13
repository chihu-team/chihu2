import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var RongCloudLibPlugin: any;
declare var SHA1: any;
declare var RongIMClient: any;
declare var RongIMLib: any;
@Injectable()
export class RongCloudProvider {

  rong_data: EventEmitter<number>;

  headers: Headers;

  //融云配置变量
  rand: any;
  now: any;
  token: any;
  Signature: any;

  constructor(public http: Http) { }

  init() {
    this.rong_data = new EventEmitter();
    RongIMLib.RongIMClient.init("pwe86ga5p2uh6");
    this.setConnectionStatusListener();
    this.setOnReceiveMessageListener();
  }

  // 连接状态监听器
  setConnectionStatusListener() {

    RongIMClient.setConnectionStatusListener({
      onChanged: function (status) {
        switch (status) {
          case RongIMLib.ConnectionStatus.CONNECTED:
            //alert('融云链接成功');
            break;
        }
      }
    });
  }

  //获取会话列表
  getConversationList() {

    return new Promise(function (resolve, reject) {
      
      RongIMClient.getInstance().getConversationList({
        onSuccess: function (list) {
          //list 会话列表
          resolve(list);
        },
        onError: function (error) {
          //GetConversationList error
          reject(error);
        }
      }, null);
    })
  };

  // 消息监听器
  setOnReceiveMessageListener() {

    var _that = this;

    RongIMClient.setOnReceiveMessageListener({
      // 接收到的消息
      onReceived: function (message) {
        //发送事件
        _that.rong_data.emit(message);
      }
    });
  }

  //连接服务器
  connect(token) {

    RongIMClient.connect(token, {
      onSuccess: function (userId) {
        //alert("Login successfully." + userId);
      },
      onTokenIncorrect: function () {
        alert('token无效');
      },
      onError: function (errorCode) {
        var info = '';
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
            info = '不可接受的协议版本';
            break;
          case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
            info = 'appkey不正确';
            break;
          case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
            info = '服务器不可用';
            break;
        }
        alert(errorCode);
      }
    });
  }

  sendTextMessage(targetId, message) {

    return new Promise(function (resolve, reject) {
      RongIMLib.RongIMClient.getInstance().sendTextMessage(RongIMLib.ConversationType.PRIVATE, targetId, message, {
        onSuccess: function (data) {

          //=> data {messageUId:"消息唯一Id",timestamp:"发送消息时间戳"}
          resolve(data);
        },
        onError: function (errorcode) {
          reject(errorcode);
        }
      });
    })
  }

  //生成token
  gettoken(_id: any, _name: any, portraitUri: any) {

    var time = (Date.now() / 1000);

    this.rand = Math.ceil(Math.random() * 10000000);

    this.now = parseInt(time.toString());
    this.Signature = SHA1("FjqMli2Qe0j6j" + this.rand.toString() + this.now.toString());

    var _that = this;
    this.headers = new Headers({
      "Content-Type": 'application/x-www-form-urlencoded',
      "App-Key": "pwe86ga5p2uh6",
      "Nonce": this.rand.toString(),
      "Timestamp": this.now.toString(),
      "Signature": this.Signature
    });



    let url = "https://api.cn.rong.io/user/getToken.json";
    var postdata = "userId=" + _id.toString() + "&name=" + _name.toString() + "&portraitUri=" + portraitUri;

    this.http.post(url, postdata, {
      headers: this.headers
    })
      .subscribe((res) => {
        this.connect(res.json()["token"]);
      });
  }

  //清楚会话列表
  clearConversations() {
    return new Promise(function (resolve, reject) {
      RongIMClient.getInstance().clearConversations({
        onSuccess: function () {
          // 清除会话成功
          resolve('1');
        },
        onError: function (error) {
          // error => 清除会话错误码。
          reject(error)
        }
      });
    })
  }

  //获取所有会话总未读消息数
  getTotalUnreadCount(){
    return new Promise(function (resolve, reject) {
      RongIMClient.getInstance().getTotalUnreadCount({
        onSuccess:function(count){
            // count => 所有会话总未读数。
            resolve(count);
        },
        onError:function(error){
            // error => 获取总未读数错误码。
            reject(error);
        }
      });
    })
  };

  //清除未读消息数
  clearUnreadCount( targetId ){
    return new Promise(function (resolve, reject) {
      
      RongIMClient.getInstance().clearUnreadCount(RongIMLib.ConversationType.PRIVATE,targetId,{
          onSuccess:function(){
              // 清除未读消息成功。
              resolve('1');
          },
          onError:function(error){
              // error => 清除未读消息数错误码。
              reject(error);
          }
      });
    })
  }

  //拉取服务器历史消息记录
  getRemoteHistoryMessages( targetId,count ){
    return new Promise(function (resolve, reject) {

      RongIMLib.RongIMClient.getInstance().getRemoteHistoryMessages(RongIMLib.ConversationType.PRIVATE, targetId, null, count*1, {
        onSuccess: function(list, hasMsg) {
             //list 历史消息数组，hasMsg为boolean值，如果为true则表示还有剩余历史消息可拉取，为false的话表示没有剩余历史消息可供拉取。
             var data = {
               "list": list,
               "hasMsg": hasMsg
             }
             resolve(data);
            },
        onError: function(error) {
            //getRemoteHistoryMessages error
            reject(error);
        }
       });

    })
  }

  //获取指定会话
  getConversation( targetId ){
    return new Promise(function (resolve, reject) {
      RongIMClient.getInstance().getConversation(RongIMLib.ConversationType.PRIVATE, targetId, {
        onSuccess: function(conver) {
           //成功 conver 为Conversation对象
           resolve(conver);
        },
        onError: function(error) {
          //失败
          reject(error);
        }
      });
    })
  }

  //指定清除本地会话中的未读消息状态
  clearMessagesUnreadStatus( targetId ){
    RongIMClient.getInstance().clearMessagesUnreadStatus(RongIMLib.ConversationType.PRIVATE,targetId,{
      onSuccess:function(isClear){
           // isClear true 清除成功 ， false 清除失败
      },
      onError:function(){
          //清除遇到错误。
      }
    });
  }

  //连接
  disconnect(){
    RongIMClient.getInstance().disconnect();
  }


}
