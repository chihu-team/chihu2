import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../../providers/user-service/user-service';

@Component({
  selector: 'work',
  templateUrl: 'work.html'
})
export class WorkComponent {

  @Input() data: any = {};

  irootNavCtrl: NavController;
  isIdark;

  constructor(public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
    this.irootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  //打开作品
  pushArticlePage(_id) {
    this.irootNavCtrl.push('ArticlePage', {
      _id: _id
    });
  }

}
