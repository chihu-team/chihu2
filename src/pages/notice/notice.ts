import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {

  page1: any = 'NoticeInformPage';
  page2: any = 'NoticeThankPage';
  page3: any = 'NoticeForkPage';
  isIdark;

  constructor(public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
    this.UserService.SetIdark.subscribe((data) => {
      this.isIdark = data;
    })
  }

}
