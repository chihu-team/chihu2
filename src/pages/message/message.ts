import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { RongCloudProvider } from '../../providers/rong-cloud/rong-cloud';
import { UserServiceProvider } from '../../providers/user-service/user-service';

declare var document: any;
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  @ViewChild(Content) content: Content;
  data:any = [];
  eventSub;
  //是否有消息class控制
  nomessage: boolean = true;
  isIdark;

  constructor( public rc: RongCloudProvider, public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
    this.eventSub = this.rc.rong_data.subscribe((message) => {
      //alert('sub:'+JSON.stringify( message ));
      this.init();
    })
  };

  ionViewDidEnter() {
    this.init();
  }

  init(){
    this.UserService.presentLoadingDefault();
    this.rc.getConversationList().then((list:any)=>{
      if(list.length > 0){
        this.nomessage = false;
        this.data = list;
      }
      this.UserService.presentLoadingDismiss();
      //alert( JSON.stringify(list) );
    }).catch((err)=>{
      this.UserService.presentLoadingDismiss();
    })
  }

  ionViewCanLeave(){
    if(this.eventSub){
      this.eventSub.unsubscribe();
    }
  }

  chat( targetId ){
    this.navCtrl.push('ChatPage',{
      targetId: targetId
    } );
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
