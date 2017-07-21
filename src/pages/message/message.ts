import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JmessageProvider } from '../../providers/jmessage/jmessage';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  data:any = [];

  constructor(public jm: JmessageProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getAllSingleConversation();
    this.onReceiveCustomMessage();
  }

  getAllSingleConversation(){
    this.jm.getAllSingleConversation().then((res)=>{
      this.data = res;
      
    });
  }

  onReceiveCustomMessage() {
    var _that = this;
    document.addEventListener('jmessage.onReceiveCustomMessage', function (msg) {
      _that.getAllSingleConversation();
    }, false);
  }

  chat( targetId ){
    this.navCtrl.push('ChatPage',{
      targetId: targetId
    } );
  }

}
