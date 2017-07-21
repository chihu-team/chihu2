import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JmessageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
declare var window;
declare var JPushPlugin;
@Injectable()
export class JmessageProvider {

  public headers: Headers;

  constructor(public http: Http) {

  }

  updateMyAvatar(avatarFileUrl) {

    return new Promise((resolve, reject) => {

      window.JMessage.updateMyAvatar(avatarFileUrl, function () {
        // 更新成功。
        resolve('ok');
      }, function (errorMsg) {
        console.log(errorMsg);
        reject(errorMsg);
      });

    });


  }

  //
  getLatestMessage(targetUsername) {
    return new Promise((resolve, reject) => {

      window.JMessage.getLatestMessage('single', targetUsername, null,
        function (response) {
          var msg = JSON.parse(response);
          resolve(msg);
        }, function (errorMsg) {
          console.log(errorMsg);	// 输出错误信息。
          reject(errorMsg);
        });


    })
  }

  //发送一条单聊文本消息
  sendSingleTextMessage(username, content) {

    return new Promise((resolve, reject) => {

      window.JMessage.sendSingleTextMessage(username, content, null,
        function (response) {
          var message = JSON.parse(response);
          resolve(message);
        }, function (errorMsg) {
          console.log(errorMsg)	// 输出错误信息。
          reject(errorMsg);
        })

    })

  }

  //登陆
  login(username, password) {
    window.JMessage.login(username, password,
      function () {
        //  登录成功。

      }, function (errorStr) {
        console.log(errorStr);	// 输出错误信息。
      });
  }

  //会话列表
  getAllSingleConversation() {
    return new Promise((resolve, reject) => {

      window.JMessage.getAllSingleConversation(
        function (response) {
          var singleConversations = JSON.parse(response);
          resolve(singleConversations);
        }, function (errorMsg) {
          console.log(errorMsg);	// 输出错误信息。
          reject(errorMsg);
        });

    })
  }



}
