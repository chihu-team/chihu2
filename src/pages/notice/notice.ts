import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {

  page1: any = 'NoticeInformPage';
  page2: any = 'NoticeThankPage';
  page3: any = 'NoticeForkPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
