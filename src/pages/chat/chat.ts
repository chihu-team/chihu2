import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';
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
  msgList:any = [];
  //输入文本信息
  editorMsg = '';
  eventSub;

  constructor(public rc: RongCloudProvider, public events: Events, public ref: ChangeDetectorRef,public UserService : UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.targetId = navParams.get('targetId');
    this.targetName = navParams.get('targetName');
    this.eventSub = this.rc.rong_data.subscribe((message) => {
      alert('sub:'+JSON.stringify( message ));
    })
  }

  ionViewCanLeave(){
    if(this.eventSub){
      this.eventSub.unsubscribe();
    }
  }

  //发送信息
    sendMsg() {
        this.rc.sendTextMessage(this.targetId,this.editorMsg).then((data)=>{
          alert( JSON.stringify(data) );
        })
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
        this.messageInput.setFocus();
    }

  

}
