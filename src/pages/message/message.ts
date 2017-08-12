import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RongCloudProvider } from '../../providers/rong-cloud/rong-cloud';

declare var document: any;
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  data:any = [];
  eventSub;

  constructor( public rc: RongCloudProvider, public navCtrl: NavController, public navParams: NavParams) {
    
    this.eventSub = this.rc.rong_data.subscribe((message) => {
      //alert('sub:'+JSON.stringify( message ));
      this.init();
    })
  };

  ionViewDidEnter() {
    this.init();
  }

  init(){
    this.rc.getConversationList().then((list)=>{
      this.data = list;
      //alert( JSON.stringify(list) );
    });
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

}
