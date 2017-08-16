import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  name:any='';
  mimg:any='';
  isIdark;

  constructor(public UserService : UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.UserService.SetIdark.subscribe((data) => {
      this.isIdark = data;
    })
    this.init();
  }

  ionViewDidEnter() {
    this.init();
  }

  init(){
    this.isIdark = this.UserService.isIdark;
    this.name = this.UserService._user.nickname;
    this.mimg = this.UserService._user.userimg;
  }

  PersonalPage(){
    this.checkLogin( 'PersonalPage' );
  }

  pushFocusPage(){
    this.checkLogin( 'MyForkPage' );
  }

  pushCollectPage(){
    this.checkLogin( 'MyCollectPage' );
    //this.navCtrl.push( 'MyCollectPage' );
  }

  pushMySharePage(){
    this.checkLogin( 'MySharePage' );
  }

  pushMyQuestionPage(){
    this.checkLogin( 'MyQuestionPage' );
  }

  pushMyWorkPage(){
    this.checkLogin( 'MyWorkPage' );
  }

  pushMyAnswerPage(){
    this.checkLogin( 'MyAnswerPage' );
  }

  pushMyCirclePage(){
    this.checkLogin( 'MyCirclePage' );
  }

  pushSettingPage(){
    this.navCtrl.push( 'SettingPage' );
  }

  //检查登录状态
  checkLogin(page){
    //alert(this.UserService._user.id);
    if(this.UserService._user._id){
      this.navCtrl.push( page );
    }else{
      this.navCtrl.push( 'LoginPage' );
    }
  }

}
