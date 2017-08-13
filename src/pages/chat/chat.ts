import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content, TextInput } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { RongCloudProvider } from '../../providers/rong-cloud/rong-cloud';

declare var RongIMClient: any;
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;

  targetId;
  targetName;
  msgList: any = [];
  //输入文本信息
  editorMsg = '';
  eventSub;

  constructor(public rc: RongCloudProvider, public events: Events, public ref: ChangeDetectorRef, public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.targetId = navParams.get('targetId');
    this.targetName = navParams.get('targetName');
    this.eventSub = this.rc.rong_data.subscribe((message) => {
      this.pushNewMsg(message);
      //alert('sub2:' + JSON.stringify(message));
    });
    this.rc.getConversation(this.targetId).then((res:any)=>{
      if( res.unreadMessageCount != '0' ){
        //alert(res.unreadMessageCount);
        //获取未读历史信息
        this.rc.getRemoteHistoryMessages( this.targetId, res.unreadMessageCount ).then((data:any)=>{
          if(data['hasMsg']){
            this.msgList = data['list'];
            //alert( JSON.stringify( data['list'] ) );
            this.rc.clearMessagesUnreadStatus(this.targetId);
          }
          
        })
      }
      //alert( JSON.stringify( res ) );
    })
  }

  ionViewCanLeave() {
    if (this.eventSub) {
      this.eventSub.unsubscribe();
    }
  }

  //发送信息
  sendMsg() {

    if (this.editorMsg.length > 0) {
      this.rc.sendTextMessage(this.targetId, this.editorMsg).then((data) => {
        data['targetId'] = '';
        this.pushNewMsg(data);
        this.editorMsg = '';
        //alert(JSON.stringify(data));
      }).catch((err) => {
        alert(err);
      })
    }
  }

  //推入信息到数据
  pushNewMsg(message) {
    this.msgList.push(message);
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.content.scrollToBottom) {
      this.content.scrollToBottom();
    }
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
