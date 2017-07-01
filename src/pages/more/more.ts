import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public UserService : UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
