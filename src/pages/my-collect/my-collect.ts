import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-my-collect',
  templateUrl: 'my-collect.html',
})
export class MyCollectPage {

  page1: any = 'CollectWorkPage';
  page2: any = 'CollectAnswerPage';
  _id = 0;
  chatParams = {
    _id: this._id
  };
  isIdark;

  constructor(public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
    if (this.navParams.get("id")) {
      this._id = this.navParams.get("id");
      this.chatParams._id = this._id;
    } else {
      this.chatParams._id = this.UserService._user._id;
    }

  }

}
