import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JmessageProvider } from '../../providers/jmessage/jmessage';
import { Events, Content, TextInput } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;

  targetId;
  msgList:any = [];
  //输入文本信息
    editorMsg = '';

  constructor(public events: Events, public ref: ChangeDetectorRef,public UserService : UserServiceProvider, public jm: JmessageProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.targetId = navParams.get('targetId');
    
    this.jm.getLatestMessage(this.targetId).then((res)=>{
      this.msgList = res;
      alert( JSON.stringify(res) );
    })
  }

  //发送信息
    sendMsg() {
        if (this.editorMsg == '') {
            return true;
        }
        this.jm.sendSingleTextMessage( this.targetId, this.editorMsg ).then((res)=>{
          alert(res);
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
