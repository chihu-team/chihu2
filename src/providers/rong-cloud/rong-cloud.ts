import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

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
            alert('融云链接成功');
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

}
